import { Component } from '@angular/core';
import { SliderSettings } from '../slider/slider-math';
import { LanguagePreferencesLocalizeRouterService } from '../../../../../lib.browser.decocloud';
import callToActionArrowUrl from './assets/call-to-action-arrow-bottom.svg';
import iconDesignerUrl from '../../assets/icon-product-designer.svg';
import iconPlanUrl from '../../assets/icon-product-plan.svg';
import iconScanUrl from '../../assets/icon-product-scan.svg';
import iconProductUrl from '../../assets/icon-product-product.svg';
import iconCoreUrl from '../../assets/icon-product-core.svg';
import iconRealityUrl from '../../assets/icon-product-reality.svg';



interface ToolsCards {
    name: string;
    iconUrl: string;
}

@Component({
    selector: 'home-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
    public readonly callToActionArrowUrl = callToActionArrowUrl;

    public actualLang: string = '';

    constructor(public readonly _languagePreferences: LanguagePreferencesLocalizeRouterService) {
        this.actualLang = _languagePreferences.translate.currentLang
    }

    public readonly Settingslaunch: SliderSettings = {
        type: 'regular',
        mobile: {
            marginRight: 64,
            marginLeft: 32,
            sizeCard: 316,
        },
        tablet: {
            marginRight: 64,
            marginLeft: 64,
            sizeCard: 512,
        },
        desktop: {
            marginRight: 64,
            marginLeft: 128,
            sizeCard: 512,
        },
    }

    public readonly ToolsSlider: ToolsCards[] = [
        {
            name: 'designer',
            iconUrl: iconDesignerUrl
        },
        {
            name: 'plan',
            iconUrl: iconPlanUrl
        },
        {
            name: 'scan',
            iconUrl: iconScanUrl
        },
        {
            name: 'product',
            iconUrl: iconProductUrl
        },
        {
            name: 'core',
            iconUrl: iconCoreUrl
        },
        {
            name: 'reality',
            iconUrl: iconRealityUrl
        }
    ];
}
