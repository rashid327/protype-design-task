import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Subject } from 'rxjs';


@Component ({
    templateUrl: 'data-table.html'
})

export class DataTableComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    // dtTrigger: Subject = new Subject();
    private dtTrigger: Subject<any> = new Subject();

    constructor(  private http: HttpClient, private router: Router){

    }
    public listData:Array<object> = [];
    public notesData:Array<object> = [];
    public candidateId = "";
    public message = "";
    public noteId = "";
    public editMessage = "";
       
    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 6
      
      };
      
      this.getList();    
    }

    // ## GEt All List Module ## //
    getList(){
              
      this.http.get(`http://34.70.126.62:4000/dummylisting`)
        .subscribe((data:  Array<object>) => {
          this.listData = [];
          this.listData = data; 
          this.dtTrigger.next();
          setTimeout(function () {
            $(function () {
              $('alertsTableA').DataTable();
            });
          }, 3000);
      });
    
    }

    // ## GEt All Notes Module on the bases of Candidate ID ## //
    private notes() {
     
      this.notesData = [];
      var checkbox = [];
      $.each($("input[name='check']:checked"), function(){
        checkbox.push($(this).val());
      });
      // console.log(checkbox[0]);

      if(checkbox.length == 1){
        $("#notes").modal("show");
        this.candidateId = checkbox[0];
        console.log(checkbox[0]);
        this.http.get(`http://34.70.126.62:4000/getCandidateNotes?userId=`+this.candidateId)
        .subscribe((data:  Array<object>) => {
          this.notesData = [];
          if(data.status == true){
            this.notesData = data.data; 
          }
          else{
            this.notesData = [];
          }
        });
  
      }
      // document.getElementById("notes").show;

    }

    // ## Add Notes Module ## //
    addNotes (){
      var message = (<HTMLInputElement>document.getElementById("addmsg")).value;
      
      if(message.length > 0){
        this.http.get(`http://34.70.126.62:4000/addCandidateNotes?message=`+message+`&userId=`+this.candidateId+`&adminId=0`)
        .subscribe((data:  Array<object>) => {
                    
          if(data.status == true){
            this.message = data.message;
            // document.getElementById("addmsg").value = ""; 
            (<HTMLInputElement>document.getElementById("addmsg")).value = ""; 
            setTimeout(function () {
              document.getElementById("btn").click();
            }, 1000);
            
          }
          else{
            this.message = " Something went Wrong!";
          }

        });
      }
      else{
        this.message = "Please Add Some Notes!";
      }
    }

    // ## Edit Notes Module ## //
    editNotes (id){
      this.editMessage = "";
        this.http.get(`http://34.70.126.62:4000/editCandidateNotes?userId=`+this.candidateId+`&noteId=`+id)
          .subscribe((data:  Array<object>) => {
            this.noteId = "";
            if(data.status == true){
              this.message = "";
              (<HTMLInputElement>document.getElementById("editmsg")).value = data.data[0].msg_note; 
              this.noteId = data.data[0].id  
            }
            else{
              this.message = " Something went Wrong!";
            }

      });
    
    }

    // ## Update Notes Module ## //
    updatesNotes (){

      // var message = document.getElementById("editmsg").value;
      var message = (<HTMLInputElement>document.getElementById("editmsg")).value;
      if(message.length > 0){
        this.http.get(`http://34.70.126.62:4000/updateCandidateNotes?message=`+message+`&userId=`+this.candidateId+`&noteId=`+this.noteId)
        .subscribe((data:  Array<object>) => {
          this.editMessage = "";

          if(data.status == true){
            this.editMessage = data.message;
            // document.getElementById("addmsg").value = ""; 
            (<HTMLInputElement>document.getElementById("addmsg")).value = '';
            this.notes(this.candidateId);
            setTimeout(function () {
              document.getElementById("editbtn").click();
            }, 1000);
            
          }
          else{
            this.editMessage = " Something went Wrong!";
          }

        });
      }
      else{
        this.editMessage = "Please Add Some Notes!";
      }
    }
          
        
}