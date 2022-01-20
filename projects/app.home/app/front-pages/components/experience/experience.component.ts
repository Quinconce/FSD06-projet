import { Component } from '@angular/core';
import closeUrl from '../../assets/close.svg';
import videoPlayerBackgroundUrl from '../../assets/video-background.png';
import videoPlayerUrl from '../../assets/video-player.png';
import callToActionArrowUrl from './assets/call-to-action-arrow-right.svg';
import catchFocusURl from './assets/catch-focus.svg';

@Component({
    selector: 'home-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    public isVideoShown = false;

    public readonly callToActionArrowUrl = callToActionArrowUrl;
    public readonly catchFocusURl = catchFocusURl;
    public readonly videoPlayerUrl = videoPlayerUrl;
    public readonly closeUrl = closeUrl;
    public readonly videoPlayerBackgroundUrl = videoPlayerBackgroundUrl;
}
