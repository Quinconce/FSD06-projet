import { Component, Input } from '@angular/core';
import iconSearchUrl from '../../assets/icon-search.png';
import { SliderSettings } from '../slider/slider-math';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'home-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
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

export class GalleryComponent {
    @Input()
    public translationPrefix: string = '';

    @Input()
    public interface = [];

    public imageToShow?: string;
    public showing?: boolean = false;

    public readonly iconSearchUrl = iconSearchUrl;

    public readonly sliderSettings: SliderSettings = {
        type: 'regular',
        mobile: {
            marginRight: 32,
            marginLeft: 32,
            sizeCard: 316,
        },
        tablet: {
            marginRight: 32,
            marginLeft: 64,
            sizeCard: 432,
        },
        desktop: {
            marginRight: 32,
            marginLeft: 128,
            sizeCard: 568,
        },
    };

    public zoomIn(image: any) {
        this.imageToShow = image;
        this.showing = !this.showing;
    }
}
