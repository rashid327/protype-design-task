import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExtrasRoutes } from './extras.routing';

import { StickyModule } from 'ng2-sticky-kit';
import { ScrollToModule } from 'ng2-scroll-to';
import { NgxMasonryModule } from 'ngx-masonry';

// Extras Component
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FAQComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExtrasRoutes),
        StickyModule,
        NgxMasonryModule,
        ScrollToModule.forRoot()
    ],
    declarations: [
        AccountSettingComponent,
        InvoiceComponent,
        FAQComponent,
        GalleryComponent
    ]
})
export class ExtrasModule { }
