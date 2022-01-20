import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { jobCategories, JobCategoryPage } from '../../job-categories';

@Component({
    selector: 'home-job-categories-container',
    template: `<home-job-categories
        [page]="page"
    ></home-job-categories>`
})
export class JobCategoriesContainerComponent {
    public page?: JobCategoryPage;

    constructor(
        route: ActivatedRoute,
        router: Router,
        translate: TranslateService) {

        route.paramMap.subscribe(params => {
            const category = jobCategories.find(categoryCandidate => categoryCandidate.slug == params.get('category'));
            const page = category?.pages.find(pageCandidate => pageCandidate.slug == params.get('page'));

            if (!category || !page) {
                router.navigate(['/', translate.currentLang, '404']);
                
                return;
            }

            this.page = page;
        });
    }
}
