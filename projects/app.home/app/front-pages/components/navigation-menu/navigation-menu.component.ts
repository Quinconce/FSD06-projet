import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {  trigger, transition , style , animate } from '@angular/animations';
import { LanguagePreferencesLocalizeRouterService } from '../../../../../lib.browser.decocloud';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { CreateOneContactInformationInput } from 'app/shared/graphql.generated';


@Component({
    selector: 'home-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateX(0)', opacity: 1}),
                    animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
                ])
            ]
        )
    ]
})
export class NavigationMenuComponent implements OnInit{
    @Input() isItProgression?: string;

    @Output()
    public readonly goToBusiness = new EventEmitter<void>();

    @Output()
    public keepInTouch: EventEmitter<any> = new EventEmitter<CreateOneContactInformationInput>();

    public showForm: boolean = false;
    public angForm!: FormGroup;
    public submitted = false;

    public readonly icons = {
        faBars, faTimes
    };

    public actualLang: string = '';
    /* tslint:disable:no-unused-variable */
    constructor(public readonly _languagePreferences: LanguagePreferencesLocalizeRouterService,
                private fb: FormBuilder) {
        this.actualLang = _languagePreferences.translate.currentLang
    }
    ngOnInit(){
        this.angForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            fullname: ['', [Validators.required, Validators.minLength(3)]],
            phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
            message: ['', Validators.required],
            captcha: ['', [Validators.required, Validators.pattern('[1]{2}')]],
            statut:['non traitée']
        })
    }

    get f() { return this.angForm.controls; }

    submit(values: CreateOneContactInformationInput) {
        this.submitted = true;
        if (!this.angForm.valid){
            return
        }
        //'values' information du formulaire
        this.keepInTouch.emit(values)
        this.angForm.value.statut = "non traitée"
        this.angForm.reset()
        this.submitted = false
        
    }
}
