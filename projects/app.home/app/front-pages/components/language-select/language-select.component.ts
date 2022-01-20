import { Component, Input } from '@angular/core';
import { faGlobe } from '@fortawesome/pro-light-svg-icons';
// import { TranslateService } from '@ngx-translate/core';
import { map, startWith } from 'rxjs/operators';
import { LanguagePreferencesLocalizeRouterService } from '../../../../../lib.browser.decocloud';
import { LocalizeRouterService } from '../../../../../lib.browser.localize-router';

@Component({
    selector: 'home-language-select',
    templateUrl: './language-select.component.html',
    styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent{
    @Input()
    public textColor: string = 'white';

    public isLangageSelectorPopUpOpen = false;

    public readonly icons = {
        faGlobe
    };

    public readonly availableLanguages = this.languagePreferences.availableLanguagesNames;

    public readonly currentLanguageKey$ = this.languagePreferences.translate.onLangChange.pipe(
        map(event => event.lang),
        startWith(this.languagePreferences.translate.currentLang),
        );

    public constructor(
        private readonly localizeRouter: LocalizeRouterService,
        private readonly languagePreferences: LanguagePreferencesLocalizeRouterService,
       // private readonly translate: TranslateService
        ) {
    }

    public switchLanguage(lang: string): void {
        this.localizeRouter.changeLanguage(lang);
    }
}
