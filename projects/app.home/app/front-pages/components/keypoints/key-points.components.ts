import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/pro-solid-svg-icons';

@Component({
    selector: 'home-key-points',
    templateUrl: './key-points.component.html',
    styleUrls: ['./key-points.component.scss']
})
export class KeyPointsComponent {
    @Input()
    public translationPrefix: string = '';

    public readonly icons = { faCheck };
}
