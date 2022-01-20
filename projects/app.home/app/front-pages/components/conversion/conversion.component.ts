import { Component } from '@angular/core';
import closeUrl from '../../assets/close.svg';
import videoPlayerBackgroundUrl from '../../assets/video-background.png';
import videoPlayerUrl from '../../assets/video-player.png';
import callToActionArrowUrl from './assets/call-to-action-arrow-left.svg';
import catchFocusUrl from './assets/catch-focus.svg';

@Component({
    selector: 'home-conversion',
    templateUrl: './conversion.component.html',
    styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
    public isVideoShown = false;

    public readonly callToActionArrowUrl = callToActionArrowUrl;
    public readonly catchFocusUrl = catchFocusUrl;
    public readonly videoPlayerUrl = videoPlayerUrl;
    public readonly closeUrl = closeUrl;
    public readonly videoPlayerBackgroundUrl = videoPlayerBackgroundUrl;
}
