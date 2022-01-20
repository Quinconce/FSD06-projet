import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import placeholder1 from '../../assets/job-categories/rendu-mdc-1.png';
import placeholder2 from '../../assets/job-categories/rendu-mdc-2.png';
import { JobCategoryPage } from '../../job-categories';

@Component({
    selector: 'home-job-categories',
    templateUrl: './job-categories.component.html',
    styleUrls: ['./job-categories.component.scss']
})
export class JobCategoriesComponent {
    @Input()
    public page?: JobCategoryPage;

    public progress: number = 0;

    // @todo ça doit être dynamique à un moment, c'est un placeholder temporaire du coup là.
    public readonly placeholder1 = placeholder1;
    public readonly placeholder2 = placeholder2;

    @ViewChild('scrollHere', { read: ElementRef })
    public scrollHere!: ElementRef<HTMLElement>;

    @ViewChild('business', { read: ElementRef })
    public toScrollToBusiness!: ElementRef<HTMLElement>;

    @HostListener('window:scroll', ['event'])
    public onScroll() {
        const topOfSecondSection: number = this.scrollHere.nativeElement.getBoundingClientRect().top;
        this.progress = topOfSecondSection > 0 ? 0 : 2;
    }

    public scrollToNextSection() {
        this.scrollHere.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    public scrollingToBusiness() {
        this.toScrollToBusiness.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}
