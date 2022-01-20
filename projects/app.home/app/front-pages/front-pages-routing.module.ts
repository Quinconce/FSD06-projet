import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '../../../lib.browser.localize-router';
import { HomeContainerComponent, ProductDesignerContainerComponent, JobCategoriesContainerComponent, ProductPlanContainerComponent, ProductScanContainerComponent, ProductProductContainerComponent, ProductRealityContainerComponent, ProductCoreContainerComponent } from './containers';
import { NotFoundComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: HomeContainerComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/designer',
        component: ProductDesignerContainerComponent
    },
    {
        path: 'products/plan',
        component: ProductPlanContainerComponent
    },
    {
        path: 'products/scan',
        component: ProductScanContainerComponent
    },
    {
        path: 'products/product',
        component: ProductProductContainerComponent
    },
    {
        path: 'products/reality',
        component: ProductRealityContainerComponent
    },
    {
        path: 'products/core',
        component: ProductCoreContainerComponent
    },
    {
        path: ':category/:page',
        component: JobCategoriesContainerComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        LocalizeRouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FrontPagesRoutingModule {
}
