import { Component } from '@angular/core';
import callToActionUrl from './assets/call-to-action-arrow.svg';
import catchFocusUrl from './assets/catch-focus-left.svg';
import chairUrl from './assets/chair.png';

@Component({
    selector: 'home-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
    public readonly chairUrl = chairUrl;
    public readonly callToActionUrl = callToActionUrl;
    public readonly catchFocusUrl = catchFocusUrl;
}
