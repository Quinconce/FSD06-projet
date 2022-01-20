import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { jobCategories } from '../../job-categories';

@Component({
    selector: 'home-business',
    templateUrl: './business.component.html',
    styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
    public categories = jobCategories;
    public currentLang: string = '';

    /* tslint:disable:no-unused-variable */
    constructor(translate: TranslateService) {
        this.currentLang = translate.currentLang;
    }
}
