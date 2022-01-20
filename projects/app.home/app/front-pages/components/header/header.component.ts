import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCommentsAlt } from '@fortawesome/pro-light-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import bouttonScrollUrl from '../../assets/button-scroll.svg';
import closeUrl from '../../assets/close.svg';
import logoFacebookUrl from '../../assets/logo-facebook-border.svg';
import logoInstagramUrl from '../../assets/logo-instagram-border.svg';
import logoLinkedIn from '../../assets/logo-linkedin-border.svg';
import logoMobileUrl from '../../assets/logo-mobile.png';
import logoTabletUrl from '../../assets/logo-tablet.png';
import logoTwitterUrl from '../../assets/logo-twitter-border.svg';
import logoYoutubeUrl from '../../assets/logo-youtube-border.svg';
import stephaneBecker from '../../assets/stephane-becker.png';

export type SwitchLanguageEventsArgs = { lang: string };

@Component({
    selector: 'home-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input()
    public backgroundImg = '';

    @Input()
    public translationPrefix = '';

    @Output()
    public readonly goTo = new EventEmitter<void>();

    @Output()
    public readonly goToBusiness = new EventEmitter<void>();

    @Output()
    public keepInTouch = new EventEmitter<void>();

    public currentLang: string = '';
    public isVideoShown = false;

    public readonly bouttonScrollUrl = bouttonScrollUrl;
    public readonly closeUrl = closeUrl;
    public readonly logoMobileUrl = logoMobileUrl;
    public readonly logoTabletUrl = logoTabletUrl;
    public readonly logoTwitterUrl = logoTwitterUrl;
    public readonly logoFacebookUrl = logoFacebookUrl;
    public readonly logoInstagramUrl = logoInstagramUrl;
    public readonly logoLinkedIn = logoLinkedIn;
    public readonly logoYoutubeUrl = logoYoutubeUrl;
    public readonly stephaneBecker = stephaneBecker;

    public readonly icons = {
        faInstagram, faLinkedinIn, faYoutube, faTwitter, faFacebookF, faBars, faCommentsAlt
    };

    constructor(translate: TranslateService) {
        this.currentLang = translate.currentLang
    }
}
