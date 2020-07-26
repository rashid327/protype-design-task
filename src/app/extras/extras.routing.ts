import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Extras Common Components
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FAQComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';

export const ExtrasRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'account-setting',
                component: AccountSettingComponent,
                data: {
                    title: 'Account Setting'
                }
            },
            {
                path: 'invoice',
                component: InvoiceComponent,
                data: {
                    title: 'Invoice'
                }
            },
            {
                path: 'faq',
                component: FAQComponent,
                data: {
                    title: 'FAQ'
                }
            },
            {
                path: 'gallery',
                component: GalleryComponent,
                data: {
                    title: 'Gallery'
                }
            }
        ]        
    }
];

