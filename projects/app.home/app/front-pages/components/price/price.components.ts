import { Component, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import iconCoreUrl from '../../assets/icon-product-core.svg';
import iconDesignerUrl from '../../assets/icon-product-designer.svg';
import iconPlanUrl from '../../assets/icon-product-plan.svg';
import iconProductUrl from '../../assets/icon-product-product.svg';
import iconRealityUrl from '../../assets/icon-product-reality.svg';
import iconScanUrl from '../../assets/icon-product-scan.svg';
import chevronImgUrl from './assets/price-chevron.svg';

enum FeatureCheckType {
    Absent, Present
}

type FeatureLine = CheckboxFeatureLine | TextFeatureLine;

interface CheckboxFeatureLine extends BaseFeatureLine<FeatureCheckType> {
    type: 'checkbox';
}

interface TextFeatureLine extends BaseFeatureLine<string> {
    type: 'text';
}

interface BaseFeatureLine<T> {
    name: string;
    solo: T;
    team: T;
    ecommerce: T;
    plus: T;
}

interface ProductsCards {
    name: string;
    logoUrl: string;
}

@Component({
    selector: 'home-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})

export class PriceComponent {
    @Input()
    public translationPrefix: string = '';

    public currentLang: string = '';

    public readonly chevronImgUrl = chevronImgUrl;
    public readonly iconDesignerUrl = iconDesignerUrl;
    public readonly iconPlanUrl = iconPlanUrl;
    public readonly iconScanUrl = iconScanUrl;
    public readonly iconRealityUrl = iconRealityUrl;
    public readonly iconProductUrl = iconProductUrl;
    public readonly iconCoreUrl = iconCoreUrl;
    public readonly icons = { faCheck, faTimes };

    public readonly FeaturesLines: FeatureLine[] = [
        {
            name: 'firstLine',
            type: 'checkbox',
            solo: FeatureCheckType.Absent,
            team: FeatureCheckType.Absent,
            ecommerce: FeatureCheckType.Present,
            plus: FeatureCheckType.Present
        },
        {
            name: 'secondLine',
            type: 'checkbox',
            solo: FeatureCheckType.Absent,
            team: FeatureCheckType.Absent,
            ecommerce: FeatureCheckType.Present,
            plus: FeatureCheckType.Present
        },
        {
            name: 'thirdLine',
            type: 'checkbox',
            solo: FeatureCheckType.Absent,
            team: FeatureCheckType.Present,
            ecommerce: FeatureCheckType.Present,
            plus: FeatureCheckType.Present
        },
        {
            name: 'fourthLine',
            type: 'text',
            solo: '00',
            team: '00',
            ecommerce: '00',
            plus: '00'
        },
        {
            name: 'fifthLine',
            type: 'text',
            solo: '00',
            team: '00',
            ecommerce: '00',
            plus: '00'
        },
        {
            name: 'sixthLine',
            type: 'text',
            solo: '00',
            team: '00',
            ecommerce: '00',
            plus: '00'
        },
    ];

    public readonly ProductsCards: ProductsCards[] = [
        {
            name: 'designer',
            logoUrl: iconDesignerUrl
        },
        {
            name: 'plan',
            logoUrl: iconPlanUrl
        },
        {
            name: 'scan',
            logoUrl: iconScanUrl
        },
        {
            name: 'product',
            logoUrl: iconProductUrl
        },
        {
            name: 'reality',
            logoUrl: iconRealityUrl
        },
        {
            name: 'core',
            logoUrl: iconCoreUrl
        }
    ];

    // on defini les icones dans le tableau
    public iconFor(type: FeatureCheckType): any {
        switch (type) {
            case FeatureCheckType.Absent:
                return faTimes;
            case FeatureCheckType.Present:
                return faCheck;
            default:
                throw new Error(`The FeatureCheckType.${type} does not have an associated icon`);
        }
    }

    public classFor(type: FeatureCheckType): string {
        switch (type) {
            case FeatureCheckType.Absent:
                return 'absent';
            case FeatureCheckType.Present:
                return 'present';
            default:
                throw new Error(`The FeatureCheckType.${type} does not have an associated icon`);
        }
    }

    constructor(translate: TranslateService) {
        this.currentLang = translate.currentLang;
    }
}


