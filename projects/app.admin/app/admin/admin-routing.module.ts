import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components';

const routes: Routes = [
    {
        path: 'contact',
        component: components.ContactsIndexComponent,
        children: [
            {
                path: ':userId',
                component: components.ContactDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
