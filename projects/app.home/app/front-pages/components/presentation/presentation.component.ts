import { Component, Input } from '@angular/core';
import { SliderSettings } from '../slider/slider-math';

export interface Column {
    name: string;
    index?: number;
}

//les cas ou on veut afficher 2 slider dans le composant
export interface SliderDataSolo {
    type: 'solo';
    leftColumn?: Column[];
    rightColumn?: Column[];
    imgSlider: Column[];
    infosSlider: SliderSettings;
    imageAround: string;
}

//les cas ou on veut afficher 2 slider avec 2 dans le composant
export interface SliderDataDual {
    type: 'dual';
    leftColumn?: Column[];
    rightColumn?: Column[];
    imgSlider: Column[];
    imgSlider2: Column[];
    infosSlider: SliderSettings;
    imageAround: string;
}

export type SliderData = SliderDataDual | SliderDataSolo;

@Component({
    selector: 'home-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
    @Input()
    public translationPrefix: string = '';

    @Input()
    public sliderData!: SliderData;
}
