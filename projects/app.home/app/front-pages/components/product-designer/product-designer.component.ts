import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Column, SliderData } from '../presentation/presentation.component';
import { SliderSettings } from '../slider/slider-math';
import detailsWindowUrl from '../../assets/browser-header.png';
import screenShot1 from './assets/amenagement.jpg';
import screenShot2 from './assets/panier.jpg';
import screenShot3 from './assets/plan.jpg';
import screenShot4 from './assets/recap-01.jpg';
import screenShot5 from './assets/recap-02.jpg';
import screenShot6 from './assets/studio.jpg';
import screenShot7 from './assets/visite.jpg';

interface PicturesViewer {
    name: string;
    screenShots: string;
}

@Component({
    selector: 'home-product-designer',
    templateUrl: './product-designer.component.html',
    styleUrls: ['./product-designer.component.scss']
})

export class ProductDesignerComponent {

    @ViewChild('scrollHere', { read: ElementRef }) Scrollhere!: ElementRef<HTMLElement>;

    @ViewChild('business', { read: ElementRef }) ToScrollToBusiness!: ElementRef<HTMLElement>;

    showVar: number = 0;

    public scrollToNextSection() {
        this.Scrollhere.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    @HostListener('window:scroll', ['event'])
    OnScroll() {
        const topSecondeSection: number = this.Scrollhere.nativeElement.getBoundingClientRect().top;
        topSecondeSection > 0 ? (this.showVar = 0) : (this.showVar = 2);
    }

    public scrollingToBusiness() {
        this.ToScrollToBusiness.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    public readonly PicturesSlider: PicturesViewer[] = [
        {
            name: 'firstScreen',
            screenShots: screenShot3
        },
        {
            name: 'secondScreen',
            screenShots: screenShot1
        },
        {
            name: 'thirdScreen',
            screenShots: screenShot7
        },
        {
            name: 'fourthScreen',
            screenShots: screenShot6
        },
        {
            name: 'fourthScreen',
            screenShots: screenShot2
        },
        {
            name: 'fourthScreen',
            screenShots: screenShot4
        },
        {
            name: 'fourthScreen',
            screenShots: screenShot5
        }
    ];

    public readonly leftColumn: Column[] = [
        {
            name: 'plan',
            index: 0
        },
        {
            name: 'aménagement',
            index: 1
        },
        {
            name: 'visite',
            index: 2
        }
    ];

    public readonly rightColumn: Column[] = [
        {
            name: 'studio',
            index: 3
        },
        {
            name: 'panier',
            index: 4
        },
        {
            name: 'récapitulatif',
            index: 5
        }
    ];
    public readonly centerColumn: Column[] = [
        {
            name: screenShot3
        },
        {
            name: screenShot1
        },
        {
            name: screenShot7
        },
        {
            name: screenShot6
        },
        {
            name: screenShot2
        },
        {
            name: screenShot4
        }
    ];

    public readonly Settingslaunch: SliderSettings = {
        type: 'fullWidth',
        mobile: {
            marginRight: 0,
            marginLeft: 0,
            sizeCard: 0,
        },
        tablet: {
            marginRight: 0,
            marginLeft: 0,
            sizeCard: 0,
        },
        desktop: {
            marginRight: 0,
            marginLeft: 0,
            sizeCard: 1032,
        },
    };

    public slider: SliderData = {
        type: 'solo',
        leftColumn: this.leftColumn,
        rightColumn: this.rightColumn,
        imgSlider: this.centerColumn,
        infosSlider: this.Settingslaunch,
        imageAround: detailsWindowUrl
    };
}
