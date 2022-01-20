import { Component } from '@angular/core';
import aliseo from './assets/aliseo.svg';
import alsapan from './assets/alsapan.svg';
import cuisine from './assets/321cuisine.svg';
import forgiani from './assets/forgiarini.svg';
import leroymerlin from './assets/leroymerlin.svg'
import soprema from './assets/soprema.svg';
import velum from './assets/velum.svg';
import weberHaus from './assets/weberhaus.svg';
import ycart from './assets/ycart.svg';

@Component({
    selector: 'home-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent{

    public logos = [
        cuisine, aliseo, alsapan, forgiani, leroymerlin, soprema, velum, weberHaus, ycart
    ]

}
