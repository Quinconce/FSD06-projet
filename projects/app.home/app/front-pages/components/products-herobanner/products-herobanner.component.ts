import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faBars, faCommentsAlt } from '@fortawesome/pro-light-svg-icons';
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

@Component({
    selector: 'home-products-herobanner',
    templateUrl: './products-herobanner.component.html',
    styleUrls: ['./products-herobanner.component.scss']
})
export class ProductsHerobannerComponent {

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

    public isContactPopUpOpen = false;
    public isLangageSelectorPopUpOpen = false;

    @Input()
    public availableLanguages: { [key: string]: string } = {};

    @Input()
    public currentLanguageKey?: string;


    @Input()
    public backgroundImg = '';

    @Input()
    public translationPrefix = '';

    @Output()
    public readonly goTo = new EventEmitter<void>();

    @Output()
    public readonly goToBusiness = new EventEmitter<void>();

    public readonly icons = {
        faInstagram, faLinkedinIn, faYoutube, faTwitter, faFacebookF, faGlobe, faBars, faCommentsAlt
    };

    constructor() {
        this.isContactPopUpOpen = window.innerWidth > 1340;
    }

}
