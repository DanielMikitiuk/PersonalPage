import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsAndKnowledComponent } from './skills-and-knowled/skills-and-knowled.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    WorkExperienceComponent,
    SkillsAndKnowledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
