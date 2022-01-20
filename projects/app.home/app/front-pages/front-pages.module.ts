import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FrontPagesRoutingModule } from './front-pages-routing.module';
import { components } from './components';
import { containers } from './containers';

@NgModule({
    imports: [
        SharedModule, FrontPagesRoutingModule
    ],
    declarations: [
        ...containers, ...components,
    ]
})
export class FrontPagesModule {
}
