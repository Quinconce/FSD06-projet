import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloLink } from '@apollo/client/core';
import { VisitViewerModule } from '@mitm/ngx-visit-viewer';
import { NguCarouselModule } from '@ngu/carousel';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DateFnsModule } from 'ngx-date-fns';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { from, Observable, throwError } from 'rxjs';
import {
    defaultAppScopeNameToken, LanguagePreferencesService, SessionTrackerService, WatsonService
} from '../../lib.browser.decocloud';
import { AuthTokenService } from '../../lib.browser.decocloud/services/auth';
import { AuthTokenHttpInterceptorService } from '../../lib.browser.decocloud/services/auth-token-http-interceptor.service';
import { AlertEnhancerService } from '../../lib.browser.decocloud/unity/alert-enhancer.service';
import * as intl from '../../lib.portable.decocloud.intl';
import { translations } from '../../lib.portable.decocloud.intl/translations-async';
import { provideApolloClientOptions, provideApolloLink } from './apollo';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, components } from './components';
import { containers } from './containers';
import { components as legacyBrandComponents } from './page-components/brand';
import { components as legacyCatalogsComponents } from './page-components/brand/catalogs';
import { components as legacyCategoryPickerComponents } from './page-components/brand/category-picker';
import { components as legacyItemsComponents } from './page-components/brand/items';
import { components as legacyMembersComponents } from './page-components/brand/members';
import { components as legacyPalettesComponents } from './page-components/brand/palettes';
import { components as legacyPicturesComponents } from './page-components/brand/pictures';
import { components as legacyVisitsComponents } from './page-components/brand/visits';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeFr);

export function provideTranslateLoader(): TranslateLoader {
    return new class extends TranslateLoader {
        public getTranslation(lang: keyof typeof translations): Observable<any> {
            return intl.languages.includes(lang)
                ? from(translations[lang]())
                : throwError(new Error(`Cannot find translations for lang "${lang}"`));
        }
    }();
}

export function provideSwal() {
    // tslint:disable-next-line:no-submodule-imports - legit here
    return import('sweetalert2/src/sweetalert2.js').then(({ default: Swal }) => Swal.mixin({
        cancelButtonText: 'Annuler',
        buttonsStyling: false,
        customClass: {
            container: 'sweetalert2-theme--swal2-container',
            popup: 'sweetalert2-theme--swal2-popup',
            title: 'sweetalert2-theme--swal2-title',
            confirmButton: 'btn btn-lg btn-primary',
            cancelButton: 'btn btn-lg btn-default ml-2'
        }
    }));
}

export function initializeLanguagePreferencesService(languagePrefs: LanguagePreferencesService) {
    return () => languagePrefs.start();
}

export function initializeTrackingServices(watson: WatsonService, sessionTracker: SessionTrackerService) {
    return () => {
        watson.initialize();
        sessionTracker.initialize();
    };
}

/**
 * Permet de remplacer les alerts Unity par des sweetalerts. Cache certaines erreurs inoffensives.
 */
export function enhanceUnityAlerts(alertEnhancer: AlertEnhancerService) {
    return () => alertEnhancer.start();
}

export function onMonacoLoad(): void {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        enableSchemaRequest: true,
        validate: true
    });
}

@NgModule({
    declarations: [
        ...containers, ...components,
        ...legacyBrandComponents,
        ...legacyCatalogsComponents,
        ...legacyCategoryPickerComponents,
        ...legacyItemsComponents,
        ...legacyMembersComponents,
        ...legacyPalettesComponents,
        ...legacyPicturesComponents,
        ...legacyVisitsComponents
    ],
    imports: [
        //=> Angular modules
        BrowserModule, BrowserAnimationsModule,
        HttpClientModule,
        FormsModule, ReactiveFormsModule,

        //=> Third-party modules
        // Bootstrap
        ButtonsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        PopoverModule.forRoot(),
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
        //Others
        DateFnsModule.forRoot(),
        ToastrModule.forRoot(),
        MonacoEditorModule.forRoot({
            onMonacoLoad,
            defaultOptions: {
                theme: 'vs',
                minimap: { enabled: false },
                scrollBeyondLastLine: false
            }
        }),
        SweetAlert2Module.forRoot({ provideSwal }),
        VisitViewerModule,
        NguCarouselModule,
        NgxWebstorageModule.forRoot({ prefix: 'admin', separator: '.' }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: provideTranslateLoader
            }
        }),

        //=> App modules
        SharedModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenHttpInterceptorService,
            deps: [AuthTokenService],
            multi: true
        },
        {
            provide: ApolloLink,
            useFactory: provideApolloLink,
            deps: [HttpClient]
        },
        {
            provide: APOLLO_OPTIONS,
            useFactory: provideApolloClientOptions,
            deps: [ApolloLink, AuthTokenService, TranslateService],
        },
        {
            provide: defaultAppScopeNameToken,
            useValue: 'admin'
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeLanguagePreferencesService,
            deps: [LanguagePreferencesService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeTrackingServices,
            deps: [WatsonService, SessionTrackerService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: enhanceUnityAlerts,
            deps: [AlertEnhancerService],
            multi: true
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
