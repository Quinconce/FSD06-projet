import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCommentsAlt } from '@fortawesome/pro-light-svg-icons';
import { LanguagePreferencesLocalizeRouterService } from '../../../../../lib.browser.decocloud';
import grid from '../../../../style/lib-grid'
import bouttonScrollUrl from '../../assets/button-scroll.svg';
import closeUrl from '../../assets/close.svg';
import logoMobileUrl from '../../assets/logo-mobile.png';
import logoTabletUrl from '../../assets/logo-tablet.png';
import logoTwitterUrl from '../../assets/logo-twitter-border.svg';
import logoFacebookUrl from '../../assets/logo-facebook-border.svg';
import logoInstagramUrl from '../../assets/logo-instagram-border.svg';
import logoLinkedIn from '../../assets/logo-linkedin-border.svg';
import logoYoutubeUrl from '../../assets/logo-youtube-border.svg';
import StephanBecker from '../../assets/stephane-becker.png';



export type SwitchLanguageEventsArgs = { lang: string };

@Component({
    selector: 'home-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
    public readonly bouttonScrollUrl = bouttonScrollUrl;
    public readonly closeUrl = closeUrl;
    public readonly logoMobileUrl = logoMobileUrl;
    public readonly logoTabletUrl = logoTabletUrl;
    public readonly logoTwitterUrl = logoTwitterUrl;
    public readonly logoFacebookUrl = logoFacebookUrl;
    public readonly logoInstagramUrl = logoInstagramUrl;
    public readonly logoLinkedIn = logoLinkedIn;
    public readonly logoYoutubeUrl = logoYoutubeUrl;
    public readonly StephanBecker = StephanBecker;
    public actualLang: string = '';

    public isContactPopUpOpen = false;

    @Input()
    public backgroundImg = '';

    @Input()
    public translationPrefix = '';

    @Output()
    public readonly goTo = new EventEmitter<void>();

    @Output()
    public readonly goToBusiness = new EventEmitter<void>();

    public readonly icons = {
        faInstagram, faLinkedinIn, faYoutube, faTwitter, faFacebookF, faBars, faCommentsAlt
    };

    constructor(public readonly _languagePreferences: LanguagePreferencesLocalizeRouterService) {
        this.isContactPopUpOpen = window.innerWidth > grid.desktopWidth;
        this.actualLang = _languagePreferences.translate.currentLang
    }
}
