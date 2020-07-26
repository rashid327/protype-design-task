import { Component } from '@angular/core';


@Component ({
    templateUrl: 'gallery.html'
})

export class GalleryComponent {

  masonryItems: any[];

    masonryContainer: any;

    constructor() {
        this.masonryItems = [
            {
              src: 'assets/images/others/img-13.jpg',
              w: 700, h: 500,
              'title': 'New Seat',
              'date': '27/6/2017'
            },
            {
              src: 'assets/images/others/img-14.jpg',
              w: 700, h: 1000,
              'title': 'Time For Sweet',
              'date': '25/6/2017'
            },
            {
              src: 'assets/images/others/img-15.jpg',
              w: 700, h: 500,
              'title': 'The Higlight',
              'date': '17/6/2017'
            },
            {
              src: 'assets/images/others/img-16.jpg',
              w: 700, h: 1000,
              'title': 'Corner Art',
              'date': '1/6/2017'
            },
            {
              src: 'assets/images/others/img-17.jpg',
              w: 700, h: 500,
              'title': 'Stay tall',
              'date': '29/5/2017'
            },
            {
              src: 'assets/images/others/img-18.jpg',
              w: 700, h: 500,
              'title': 'Rooftop alone',
              'date': '23/5/2017'
            },
            {
              src: 'assets/images/others/img-19.jpg',
              w: 700, h: 500,
              'title': 'Macarons',
              'date': '21/5/2017'
            },
            {
              src: 'assets/images/others/img-20.jpg',
              w: 700, h: 500,
              'title': 'Take a break',
              'date': '20/5/2017'
            },
            {
              src: 'assets/images/others/img-21.jpg',
              w: 700, h: 1000,
              'title': 'Stay Slim',
              'date': '18/5/2017'
            },
            {
              src: 'assets/images/others/img-22.jpg',
              w: 700, h: 500,
              'title': 'Summer 2016',
              'date': '17/5/2017'
            },
            {
              src: 'assets/images/others/img-23.jpg',
              w: 700, h: 1000,
              'title': 'Yummy',
              'date': '16/5/2017'
            },
            {
              src: 'assets/images/others/img-24.jpg',
              w: 700, h: 500,
              'title': 'My sliky hair',
              'date': '15/5/2017'
            },
            {
              src: 'assets/images/others/img-25.jpg',
              w: 700, h: 500,
              'title': 'High Tea',
              'date': '11/5/2017'
            },
            {
              src: 'assets/images/others/img-26.jpg',
              w: 700, h: 500,
              'title': 'Amazing hand',
              'date': '10/5/2017'
            },
            {
              src: 'assets/images/others/img-27.jpg',
              w: 700, h: 500,
              'title': 'Lonely breakfast',
              'date': '9/5/2017'
            },
            {
              src: 'assets/images/others/img-28.jpg',
              w: 700, h: 500,
              'title': 'So nature',
              'date': '8/5/2017'
            }
        ];
    }
}