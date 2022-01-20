import { Component } from '@angular/core';
import { filter, map, startWith } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { shareReplayOne } from '../../../../../lib.portable.commons/rxjs-operators';
import { Observable } from 'rxjs';
import {  ContactInformationQueryGQL } from 'app/shared/graphql.generated';



@Component({
    templateUrl: './contacts-index.component.html',
    styleUrls: ['./contacts-index.component.scss'],
})

export class ContactsIndexComponent  {

    public hasEditorOpened: Observable<boolean>;
    public allContactInformation: any;

    public constructor(
        route: ActivatedRoute,
        router: Router,
        private readonly ContactInformationQuery: ContactInformationQueryGQL
    ){
        this.ContactInformationQuery.watch({}).valueChanges.subscribe(
            users =>  this.allContactInformation =  users.data?.reveal
        )
        this.hasEditorOpened = router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            startWith(undefined), // no NavigationEnd on first load
            map(() => !!route.firstChild),
            shareReplayOne());
    }

    getColor(statut: string){
        switch (statut) {
            case 'en cours de traitement':
                return 'warning';
            case 'traitée':
                return  'success';
            case 'non traitée':
                return  'danger';
            default :
                return 'secondary'
        }
    }
}
