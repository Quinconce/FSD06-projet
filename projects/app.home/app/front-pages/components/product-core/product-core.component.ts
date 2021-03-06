import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Column, SliderData } from '../presentation/presentation.component';
import { SliderSettings } from '../slider/slider-math';
import detailsWindowUrl from '../../assets/browser-header.png';
import ImageSliderUrl1 from './assets/slider-placeholder-1.png';
import ImageSliderUrl2 from './assets/slider-placeholder-2.png';
import ImageSliderUrl3 from './assets/slider-placeholder-3.png';
import ImageSliderUrl4 from './assets/slider-placeholder-4.png';
import ImageSliderUrl5 from './assets/slider-placeholder-5.png';
import ImageSliderUrl6 from './assets/slider-placeholder-6.jpg';
import ImageSliderUrl7 from './assets/slider-placeholder-7.jpg';
import ImageSliderUrl8 from './assets/slider-placeholder-8.jpg';
import screenShot1 from './assets/gallery-placeholder-1.png';
import screenShot2 from './assets/gallery-placeholder-2.png';
import screenShot3 from './assets/gallery-placeholder-3.png';

interface PicturesViewer {
    name: string;
    screenShots: string;
}

@Component({
    selector: 'home-product-core',
    templateUrl: './product-core.component.html',
    styleUrls: ['./product-core.component.scss']
})

export class ProductCoreComponent {

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
            screenShots: screenShot1
        },
        {
            name: 'secondScreen',
            screenShots: screenShot2
        },
        {
            name: 'thirdScreen',
            screenShots: screenShot3
        },
        {
            name: 'fourthScreen',
            screenShots: screenShot2
        }
    ];
    public readonly leftColumn: Column[] = [
        {
            name: 'plan',
            index: 0
        },
        {
            name: 'am??nagement',
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
            name: 'r??capitulatif',
            index: 5
        }
    ];
    public readonly centerColumn: Column[] = [
        {
            name: ImageSliderUrl1
        },
        {
            name: ImageSliderUrl2
        },
        {
            name: ImageSliderUrl3
        },
        {
            name: ImageSliderUrl3
        },
        {
            name: ImageSliderUrl4
        },
        {
            name: ImageSliderUrl5
        },
        {
            name: ImageSliderUrl6
        },
        {
            name: ImageSliderUrl7
        },
        {
            name: ImageSliderUrl8
        }
    ];
    public readonly centerColumn2: Column[] = [
        {
            name: ImageSliderUrl1
        },
        {
            name: ImageSliderUrl2
        },
        {
            name: ImageSliderUrl3
        },
        {
            name: ImageSliderUrl3
        },
        {
            name: ImageSliderUrl4
        },
        {
            name: ImageSliderUrl5
        },
        {
            name: ImageSliderUrl6
        },
        {
            name: ImageSliderUrl7
        },
        {
            name: ImageSliderUrl8
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
