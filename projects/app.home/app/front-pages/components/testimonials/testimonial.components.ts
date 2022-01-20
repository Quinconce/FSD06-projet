import { Component, Input, OnInit } from '@angular/core';



interface TestimonialCards {
  //chaque "name" correspond au nom indiquer dans les fichiers de trad a la suite de "CustomersNotes"
  name: string;
  imgUrl: string;
  imgMobileUrl: string;
}

@Component({
  selector: 'home-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit{

  @Input() translationPrefix: string = '';
  @Input() ClientsPhotos: string[] = [];
  public infosCustomers?: TestimonialCards[];

  ngOnInit(){
    this.infosCustomers = [
      {
        //les "name" changerons a l'avenir pour etre le nom du clients
        name: 'firstCustomer',
        imgUrl: this.ClientsPhotos[0],
        imgMobileUrl: this.ClientsPhotos[1]
      },
      {
        name: 'secondCustomer',
        imgUrl: this.ClientsPhotos[2],
        imgMobileUrl: this.ClientsPhotos[3]
      }
    ]
  }
}
