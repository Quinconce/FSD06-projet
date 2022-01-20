import { Component, Input } from '@angular/core';
import iconSearchUrl from '../../assets/icon-search.png';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'home-pictures',
    templateUrl: './pictures.component.html',
    styleUrls: ['./pictures.component.scss'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0.2)', opacity: 0 }),
                    animate('500ms', style({ transform: 'scale(1)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'scale(1)', opacity: 0 }),
                    animate('500ms', style({ transform: 'scale(0.2)', opacity: 1 }))
                ])
            ]
        )
    ]
})
export class PicturesComponent {
    @Input()
    public translationPrefix: string = '';

    @Input()
    public screenshot1: string = '';

    @Input()
    public screenshot2: string = '';

    @Input()
    public positionImages: string = '';

    public imageToShow?: string;
    public showing?: boolean = false;

    public readonly iconSearchUrl = iconSearchUrl;

    public zoomIn(Image: any) {
        this.imageToShow = Image;
        this.showing = !this.showing;
    }
}
