import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
    LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings, ManualParserLoader
} from '../../lib.browser.localize-router';
import { languages } from '../../lib.portable.decocloud.intl';


export function provideLocalizeParser(
    translate: TranslateService, location: Location, settings: LocalizeRouterSettings): LocalizeParser {

    return new ManualParserLoader(translate, location, settings, languages);
}

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./front-pages/front-pages.module').then(m => m.FrontPagesModule),
    },
    {
        path: 'appli',
        loadChildren: () => import('./appli/appli.module').then(m => m.AppliModule),
        data: { appScopeName: 'applet', skipRouteLocalization: true }
    },
    {
        path: 'preview',
        loadChildren: () => import('./preview/preview.module').then(m => m.PreviewModule),
        data: { appScopeName: 'preview', skipRouteLocalization: true }
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
        LocalizeRouterModule.forRoot(appRoutes, {
            parser: {
                provide: LocalizeParser,
                useFactory: provideLocalizeParser,
                deps: [TranslateService, Location, LocalizeRouterSettings]
            }
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
