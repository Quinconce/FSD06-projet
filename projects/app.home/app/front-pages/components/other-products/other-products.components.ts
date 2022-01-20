import { Component, Input } from '@angular/core';
import { LanguagePreferencesLocalizeRouterService } from '../../../../../lib.browser.decocloud';
import chevronImgUrl from './assets/price-chevron.svg';
import iconDesignerUrl from '../../assets/icon-product-designer.svg';
import iconPlanUrl from '../../assets/icon-product-plan.svg';
import iconScanUrl from '../../assets/icon-product-scan.svg';
import iconRealityUrl from '../../assets/icon-product-reality.svg';
import iconProductUrl from '../../assets/icon-product-product.svg';
import iconCoreUrl from '../../assets/icon-product-core.svg';

interface ProductsCards {
    name: ProductName;
    logoUrl: string;
}

type ProductName = keyof typeof productsIcons;

const productsIcons = {
    plan: iconPlanUrl,
    designer: iconDesignerUrl,
    core: iconCoreUrl,
    reality: iconRealityUrl,
    product: iconProductUrl,
    scan: iconScanUrl
};

@Component({
    selector: 'home-other-products',
    templateUrl: './other-products.component.html',
    styleUrls: ['./other-products.component.scss']
})
export class OtherProductsComponent {
    @Input()
    public translationPrefix: string = '';

    // les produits a afficher sont defini par le parent via des string
    @Input()
    set products(products: ProductName[]) {
        this.productsCards = products.map(p => ({ name: p, logoUrl: productsIcons[p] }));
    }

    public actualLang: string = '';

    public productsCards: ProductsCards[] = [];
    public readonly chevronImgUrl = chevronImgUrl;

    constructor(public readonly _languagePreferences: LanguagePreferencesLocalizeRouterService) {
        this.actualLang = _languagePreferences.translate.currentLang;
    }
}