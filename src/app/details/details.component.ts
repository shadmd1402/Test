import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl:'./details.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  housingSerivce = inject(HousingService);
  housingLocation : HousingLocation | undefined ;
  housingName : any;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(){
    debugger;
    const housingLocationId = Number(this.route.snapshot.params['id']);
    const housingLocationName = this.route.snapshot.params['name'];
    this.housingSerivce.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
    //this.housingLocation = this.housingSerivce.getHousingLocationById(housingLocationId);
    this.housingName = housingLocationName;
  }

  submitApplication(){
    //debugger;
    this.housingSerivce.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
  newFun(){
    console.log("uhegfdg",this.applyForm.value)
  }
}
