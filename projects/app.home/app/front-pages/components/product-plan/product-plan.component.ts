import { Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import { Column, SliderData} from '../presentation/presentation.component'
import { SliderSettings } from '../slider/slider-math';
import detailsWindowUrl from '../../assets/mobile-frame.png';
import ImageSliderUrl1 from './assets/placeholder-3.png';
import ImageSliderUrl2 from './assets/placeholder-2.png';
import ImageSliderUrl3 from './assets/placeholder-1.png';
import screenShot1 from './assets/gallery-placeholder-1.png';
import screenShot2 from './assets/gallery-placeholder-2.png';
import screenShot3 from './assets/gallery-placeholder-3.png';

interface PicturesViewer{
    name: string;
    screenShots: string
}


@Component({
    selector: 'home-product-plan',
    templateUrl: './product-plan.component.html',
    styleUrls: ['./product-plan.component.scss']
})


export class ProductPlanComponent{

    @ViewChild('scrollHere', { read: ElementRef }) Scrollhere!: ElementRef<HTMLElement>;
    @ViewChild('business', { read: ElementRef }) ToScrollToBusiness!: ElementRef<HTMLElement>;

    showVar : number = 0;


    public scrollToNextSection(){
        this.Scrollhere.nativeElement.scrollIntoView({behavior : 'smooth'});
    }

    @HostListener('window:scroll', ['event'])
    OnScroll(){
        const topSecondeSection : number = this.Scrollhere.nativeElement.getBoundingClientRect().top
        topSecondeSection > 0 ? (this.showVar = 0) : (this.showVar = 2)
    }

    public scrollingToBusiness(){
        this.ToScrollToBusiness.nativeElement.scrollIntoView({behavior: 'smooth'});
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
    ]

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
    ]

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
    ]
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
    ]
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
    ]

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
    }

    public slider: SliderData = {
        type: 'dual',
        leftColumn: this.leftColumn,
        rightColumn: this.rightColumn,
        imgSlider: this.centerColumn,
        imgSlider2: this.centerColumn2,
        infosSlider: this.Settingslaunch,
        imageAround: detailsWindowUrl
    }

}
