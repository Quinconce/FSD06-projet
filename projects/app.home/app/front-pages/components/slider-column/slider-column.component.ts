import { Component, Input, OnInit } from '@angular/core';
import { Column, SliderData } from '../presentation/presentation.component';

@Component({
    selector: 'home-slider-column',
    templateUrl: './slider-column.component.html',
    styleUrls: ['./slider-column.component.scss']
})
export class SliderColumnComponent implements OnInit {
    @Input()
    public slidersInfo!: SliderData;

    @Input()
    public translationPrefix?: string;

    public combineImg?: Column[];

    public ngOnInit() {
        if (this.slidersInfo.type == 'dual') {
            //pour avoir une seule liste pour le passage en mono carroussel avec les memes cologne
            this.combineImg = this.slidersInfo.imgSlider.concat(this.slidersInfo.imgSlider2);
        }
    }
}
