import { Component } from '@angular/core';
import facebookUrl from './assets/logo-facebook.svg';
import instragramUrl from './assets/logo-instagram.svg';
import linkedInUrl from './assets/logo-linkedin.svg';
import twitterUrl from './assets/logo-twitter.svg';
import youtubeUrl from './assets/logo-youtube.svg';
import mapDesktopUrl from './assets/map-desktop.png';
import maptabletUrl from './assets/map-tablet.png';
import mapUrl from './assets/map.png';
import fbxUrl from './assets/techno-fbx.svg';
import objUrl from './assets/techno-obj.svg';
import openBimUrl from './assets/techno-open-bim.svg';
import stiUrl from './assets/techno-sti.svg';
import unityUrl from './assets/techno-unity.svg';
import webglUrl from './assets/techno-webgl.svg';

@Component({
    selector: 'home-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    public readonly mapUrl = mapUrl;
    public readonly mapTabletUrl = maptabletUrl;
    public readonly mapDesktopUrl = mapDesktopUrl;
    public readonly facebookUrl = facebookUrl;
    public readonly instragramUrl = instragramUrl;
    public readonly linkedInUrl = linkedInUrl;
    public readonly twitterUrl = twitterUrl;
    public readonly youtubeUrl = youtubeUrl;
    public readonly fbxUrl = fbxUrl;
    public readonly objUrl = objUrl;
    public readonly openBimUrl = openBimUrl;
    public readonly stiUrl = stiUrl;
    public readonly unityUrl = unityUrl;
    public readonly webglUrl = webglUrl;
}
