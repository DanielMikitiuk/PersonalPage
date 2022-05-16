import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from './person';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  PersonalInfo: PersonalInfo[] = [{ name: 'Daniel', surname: 'Mykytiuk', phoneNumber: '+380970185531', email: 'dani4ku@gmail.com' }];
  constructor() { }

  ngOnInit(): void {
  }

}
