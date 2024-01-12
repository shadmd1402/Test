import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shad.component.html',
  styleUrl: './shad.component.css'
})
export class ShadComponent {
  data: any;
  constructor(private houseService: HousingService, private router: Router){
    debugger;
    this.data = router.getCurrentNavigation()
    this.houseService.myMethod((data:any) => {
      debugger;
      // this.orgData = data; // And he have data here too!
    });
  }
  
}
