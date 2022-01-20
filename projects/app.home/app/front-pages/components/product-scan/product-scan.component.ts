import { Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import { Column, SliderData} from '../presentation/presentation.component'
import { SliderSettings } from '../slider/slider-math';
import screenShot1 from './assets/gallery-placeholder-1.png';
import screenShot2 from './assets/gallery-placeholder-2.png';
import screenShot3 from './assets/gallery-placeholder-3.png';
import detailsWindowUrl from '../../assets/browser-header.png';
import ImageSliderUrl1 from './assets/slider-placeholder-1.jpg';
import ImageSliderUrl2 from './assets/slider-placeholder-2.jpg';
import ImageSliderUrl3 from './assets/slider-placeholder-3.jpg';

interface PicturesViewer{
  name: string;
  screenShots: string
}


@Component({
  selector: 'home-product-scan',
  templateUrl: './product-scan.component.html',
  styleUrls: ['./product-scan.component.scss']
})


export class ProductScanComponent{

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
        index: 0
    },
    {
        name: 'panier',
        index: 1
    },
    {
        name: 'récapitulatif',
        index: 2
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
    {
      name: ImageSliderUrl1
  },
  {
      name: ImageSliderUrl2
  },
  {
      name: ImageSliderUrl3
  }
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
        sizeCard: 375,
    },
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

  //on creer la variable pour pouvoir la transmettres a l'enfant
  public slider: SliderData = {
    type: 'solo',
    leftColumn: this.leftColumn,
    rightColumn: this.rightColumn,
    imgSlider: this.centerColumn,
    infosSlider: this.Settingslaunch,
    imageAround: detailsWindowUrl
  }

  public scrollingToBusiness(){
    this.ToScrollToBusiness.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
