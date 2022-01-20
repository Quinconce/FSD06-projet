import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { shareReplayOne } from '../../../../../lib.portable.commons/rxjs-operators';
import { Observable } from 'rxjs';
import { faTimes, faUser, faUserSecret } from '@fortawesome/pro-regular-svg-icons';
import { ContactInformationFragmentFragment, ContactInformationQueryGQL, ContactInformationUpdateGQL, ContactInformationDeleteOneGQL } from 'app/shared/graphql.generated';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';



@Component({
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent  {
    public readonly icons = { faTimes, faUser, faUserSecret };


    user$: Observable<ContactInformationFragmentFragment | undefined>

    public constructor(
    route: ActivatedRoute,
    private readonly toastr: ToastrService,
    private readonly ContactInformationQuery: ContactInformationQueryGQL,
    private readonly ContactInformationUpdateStatut: ContactInformationUpdateGQL,
    private readonly ContactInformationDeleteOne: ContactInformationDeleteOneGQL,
    ) {

    this.user$ = this.ContactInformationQuery.watch().valueChanges.pipe(
        switchMap(users => route.paramMap.pipe(
            //get params from url
            map(params => params.get('userId')),
            //trouve le user grace a l'id
            map(userId => users.data?.reveal?.find(user => user._id == userId)),
)),
        shareReplayOne());
    }

    changeStatutContact(userId: string, state: string){
        switch (state) {
            case 'non traitée':
                Swal.fire({
                    title: 'Qui traite la demande?',
                    input: 'text',
                    icon: 'info',
                    confirmButtonText: 'valider',
                    showCancelButton: true,
                    cancelButtonText: 'annuler'
                }).then((value: any) => {
                    if (value.value != ''){
                        this.ContactInformationUpdateStatut
                        .mutate({
                            record: {_id: userId , statut: 'en cours de traitement', interlocutor: value.value} 
                        },
                            {refetchQueries: [{ query: this.ContactInformationQuery.document}]})
                        .subscribe({
                            error: err => Swal.fire({
                                title: 'il y a eu une erreur lors du traitement, recommencer ou vous adressez a un développeur',
                                icon: 'error',
                            })
                        })
                    }
                })
                break;
            case 'en cours de traitement':
                Swal.fire({
                    title: 'La demande est terminée?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'oui'
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.ContactInformationUpdateStatut
                        .mutate({record: {_id: userId , statut: 'traitée'}}, {
                            refetchQueries: [ { query: this.ContactInformationQuery.document } ]
                        })
                        .subscribe(
                            {
                            error: err =>
                                        Swal.fire({
                                title: 'il y a eu une erreur lors du traitement, recommencer ou vous adressez a un développeur',
                                icon: 'error',
                            })
                            })
                        this.toastr.success('La demande a été traitée');
                    }
                })
                break;

            case 'traitée':
                Swal.fire({
                    title: 'Le contact va etre entierement supprimer etes-vous sur ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'oui'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.ContactInformationDeleteOne
                        .mutate({ id : userId }, {
                            refetchQueries: [ { query: this.ContactInformationQuery.document } ]
                        })
                        .subscribe({
                            error: err =>
                                        Swal.fire({
                                title: 'il y a eu une erreur lors du traitement, recommencer ou vous adressez a un développeur',
                                icon: 'error',
                            })
                        })
                        this.toastr.success('Le contact a bien été supprimé');
                    }
                })
                break;

            default:
                break;
        }
    }

}
