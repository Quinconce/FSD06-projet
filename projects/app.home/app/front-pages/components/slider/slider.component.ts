import { Component, ElementRef, ViewChild, HostListener, Input, OnInit } from '@angular/core';
import {
    CompiledSettings, SliderSettings, getScrollPositionForItem, compileSettingsForScreenSize, getMyPosition
} from './slider-math';

@Component({
    selector: 'home-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    // @todo rename
    @Input()
    public testons?: SliderSettings;

    @Input()
    public pagersBackground?: string;

    @Input()
    public pagersNumber!: number;

    @Input()
    public timeBeforeAutomaticScroll!: number;

    @Input()
    public imgBackground?: 'dual' | 'solo';

    @ViewChild('scrollContainer', { read: ElementRef })
    public scrollingContainer!: ElementRef<HTMLElement>;

    public currentPosition = 0;

    public direction: 'left' | 'right' = 'right';

    public userActivityInterval: any;
    public userInactiveTimeout: any;

    public scrollNextElement: number = 0;
    public scrollPreviousElement: number = 0;

    public ngOnInit() {
        this.triggerAutomaticScrollWhenUserInactive();
    }

    @HostListener('window:click')
    @HostListener('window:touchstart')
    public refreshUserState(): void {
        clearTimeout(this.userInactiveTimeout);
        clearTimeout(this.userActivityInterval);
        this.triggerAutomaticScrollWhenUserInactive();
    }

    //recupere le nombre d'image dans le carroussel pour genérer le meme nombre de pagers
    public getPagersIterator(): undefined[] {
        return new Array(this.pagersNumber);
    }

    public scrollToElement(listelement: number): void {
        const scrollableElement = this.scrollingContainer.nativeElement;

        const settings: CompiledSettings = compileSettingsForScreenSize(
            this.testons!,
            window.innerWidth,
            scrollableElement.offsetWidth);

        this.scrollToPosition(getScrollPositionForItem(listelement, settings));
    }

    /**
     * Met a jour les variables pour la position pour le scroll automatique
     */
    public onScroll(): void {
        const scrollableElement = this.scrollingContainer.nativeElement;
        const settings = compileSettingsForScreenSize(this.testons!, window.innerWidth, scrollableElement.offsetWidth);

        this.currentPosition = getMyPosition(settings, this.scrollingContainer.nativeElement);
        this.scrollNextElement = getScrollPositionForItem(this.currentPosition + 1, settings);
        this.scrollPreviousElement = getScrollPositionForItem(this.currentPosition - 1, settings);

        // evite que le scroll automatique bloque au premier ou dernier element quand l'ecran est grand
        const maxScrollLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth;

        if (scrollableElement.scrollLeft === 0) {
            this.currentPosition = 0;
            this.direction = 'right';
        } else if (scrollableElement.scrollLeft === maxScrollLeft) {
            this.currentPosition = this.pagersNumber - 1;
            this.direction = 'left';
        }
    }

    // lance le scroll automatique
    private automaticScroll(): void {
        const scrollableElement = this.scrollingContainer.nativeElement;
        const settings = compileSettingsForScreenSize(this.testons!, window.innerWidth, scrollableElement.offsetWidth);

        this.currentPosition = getMyPosition(settings, this.scrollingContainer.nativeElement);

        const maxScrollLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth;

        this.scrollNextElement = getScrollPositionForItem(this.currentPosition, settings);
        this.scrollPreviousElement = getScrollPositionForItem(this.currentPosition - 1, settings);

        this.userActivityInterval = self.setInterval(() => {
            //eviter que le scroll automatique bloque au premier ou dernier element quand l'ecran est grand
            if (this.scrollNextElement <= 0) {
                this.currentPosition += 1;
                this.scrollNextElement = getScrollPositionForItem(this.currentPosition, settings);
            } else if (this.scrollPreviousElement > maxScrollLeft) {
                this.currentPosition -= 1;
                this.scrollPreviousElement = getScrollPositionForItem(this.currentPosition - 2, settings);
            }

            this.scrollToPosition(this.direction === 'right' ? this.scrollNextElement : this.scrollPreviousElement);
        }, 2000);
    }

    private triggerAutomaticScrollWhenUserInactive(): void {
        this.userInactiveTimeout = setTimeout(
            () => this.automaticScroll(),
            this.timeBeforeAutomaticScroll);
    }

    // scroll a l'element correspondant en cliquant sur un pager
    private scrollToPosition(position: number): void {
        this.scrollingContainer.nativeElement.scrollTo({
            top: 0,
            left: position,
            behavior: 'smooth',
        });
    }
}
