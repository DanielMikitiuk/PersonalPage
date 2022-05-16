import { Component, OnInit } from '@angular/core';
import { ExpInfo } from './work-ex-info';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  ExpInfo: ExpInfo[] = [{workExperience: '2 years ItStep Academy'}];
  constructor() { }

  ngOnInit(): void {
  }

}
