import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

export type SwitchLanguageEventsArgs = { lang: string };

@Component({
    selector: 'home-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    @Input()
    public availableLanguages: { [key: string]: string } = {};

    @Input()
    public currentLanguageKey?: string;

    @Input()
    public keepInTouchPending = false;

    @Output()
    public readonly shouldSwitchLanguage = new EventEmitter<SwitchLanguageEventsArgs>();

    @Output()
    public readonly keepInTouch = new EventEmitter<any>();

    @ViewChild('scrollHere', { read: ElementRef })
    scrollingToNextSection!: ElementRef<HTMLElement>;

    @ViewChild('business', { read: ElementRef })
    ToScrollToBusiness!: ElementRef<HTMLElement>;

    @ViewChild(ExperienceComponent)
    public readonly appletUrl = process.env.HOME_APPLET_URL;

    public isContactPopUpOpen = true;

    public scrollToNextSection() {
        this.scrollingToNextSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    public scrollingToBusiness() {
        this.ToScrollToBusiness.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}
