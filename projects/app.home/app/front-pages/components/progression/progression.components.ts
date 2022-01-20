import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { faBars, faGlobe } from '@fortawesome/pro-light-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import logoMobileUrl from '../../assets/logo-mobile.png';

@Component({
    selector: 'home-progression',
    templateUrl: './progression.component.html',
    styleUrls: ['./progression.component.scss']
})
export class ProgressionComponent {
    @Input()
    public valueOpacIndex = 0;

    @Output()
    public readonly goToBusiness = new EventEmitter<void>();

    public progress: number = 0;

    public readonly logoMobileUrl = logoMobileUrl;

    public readonly icons = {
        faGlobe, faBars
    };

    public currentLang: string = '';

    constructor(translate: TranslateService) {
        this.currentLang = translate.currentLang;
    }

    @HostListener('window:scroll', ['$event'])
    public onScrollEvent() {
        this.progress = ((window.scrollY) * 100) / (document.body.scrollHeight - window.innerHeight);
    }
}


