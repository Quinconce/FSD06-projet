import { Component } from '@angular/core';
import { SliderSettings } from '../slider/slider-math';
import cardJeanImgMobileUrl from './assets/jean-dupont-mobile.png';
import cardJeanImgUrl from './assets/jean-dupont.png';
import cardJeannneImgUrl from './assets/jeanne-dupont.png';
import cardMichelImgUrl from './assets/michel-dupont.png';

interface CustomersNoteCard {
    /**
     * Chaque "name" correspond au nom indiqué dans les fichiers de trad a la suite de "CustomersNotes"
     */
    name: string;
    imgUrl: string;
    imgMobileUrl: string;
}

@Component({
    selector: 'home-customers-note',
    templateUrl: './customers-note.component.html',
    styleUrls: ['./customers-note.component.scss']

})
export class CustomersNoteComponent {
    public readonly cardJeanImgMobileUrl = cardJeanImgMobileUrl;
    public readonly cardJeanImgUrl = cardJeanImgUrl;
    public readonly cardMichelImgUrl = cardMichelImgUrl;
    public readonly cardJeannneImgUrl = cardJeannneImgUrl;

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
            sizeCard: 580,
        },
        desktop: {
            marginRight: 32,
            marginLeft: 128,
            sizeCard: 580,
        },
    };

    /**
     * Chaque objet correspond à une carte de client, il faudra rajouter un
     * objet à chaque fois qu'on rajoute un comentaire client.
     */
    public readonly customersNote: CustomersNoteCard[] = [
        {
            // TODO les "name" changerons a l'avenir pour etre le nom du clients
            name: 'firstCustomer',
            imgUrl: cardJeanImgUrl,
            imgMobileUrl: cardJeanImgMobileUrl
        },
        {
            name: 'secondCustomer',
            imgUrl: cardMichelImgUrl,
            imgMobileUrl: cardJeanImgMobileUrl
        },
        {
            name: 'thirdCustomer',
            imgUrl: cardJeannneImgUrl,
            imgMobileUrl: cardJeanImgMobileUrl
        }
    ];
}
