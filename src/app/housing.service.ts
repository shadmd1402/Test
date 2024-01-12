import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  // myMethod$!: Observable<any>;

  private message:any; 
  private myMethodSubject = new BehaviorSubject<any>("");
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/location';
  //myMethod$: any;
  

  constructor() {

  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  getMessage(): string {
    return this.message;
  }




  myMethod(data:any) {
    debugger;
    data = "hfft"
      console.log(data); // I have data! Let's return it so subscribers can use it!
      // we can do stuff with data if we want
     return this.myMethodSubject.next(data);
      // this.orgId = data._id;
  }
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    debugger;
    const data= await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string , email: string){
    //debugger;
    console.log(firstName, lastName, email);
    
  }

  
}
