import { Component } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { LanguagePreferencesLocalizeRouterService } from '../../../../../lib.browser.decocloud';
import { LocalizeRouterService } from '../../../../../lib.browser.localize-router';
import * as component from '../../components/home/home.component';
import { ContactInformationMutationGQL, CreateOneContactInformationInput,   } from 'app/shared/graphql.generated';

@Component({
    selector: 'home-home-container',
    // tslint:disable-next-line:component-max-inline-declarations - container component
    template: `
        <home-home
            [availableLanguages]='availableLanguages'
            [currentLanguageKey]='currentLanguageKey$ | async'
            (shouldSwitchLanguage)='handleSwitchLanguage($event)'
            (keepInTouch)='gettingForm($event)'>
        </home-home>
    `
})
export class HomeContainerComponent {
    public readonly availableLanguages = this.languagePreferences.availableLanguagesNames;

    public readonly currentLanguageKey$ = this.languagePreferences.translate.onLangChange.pipe(
        map(event => event.lang),
        startWith(this.languagePreferences.translate.currentLang),
        );

    public constructor(
        private readonly localizeRouter: LocalizeRouterService,
        private readonly languagePreferences: LanguagePreferencesLocalizeRouterService,
        private readonly ContactInformationMutation: ContactInformationMutationGQL) {
    }

    public handleSwitchLanguage(event: component.SwitchLanguageEventsArgs): void {
        this.localizeRouter.changeLanguage(event.lang);
    }

    public gettingForm(contactResult: CreateOneContactInformationInput){
        
        this.ContactInformationMutation.mutate({ record: contactResult}).subscribe(
            {
                error: err => console.log(err),
            }
        )

    }


    // public uptdateStatut(contactResult:UpdateOneContactInformationInput){
    //     this.ContactInformationMutation.mutate({ record: contactResult}).subscribe(
    //         {
    //             error: err => console.log(err),
    //         }
    //     )

    // }
}
