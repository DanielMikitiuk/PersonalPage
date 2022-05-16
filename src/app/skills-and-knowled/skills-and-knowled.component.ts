import { Component, OnInit } from '@angular/core';
import { SkillsAndKnowled } from './skills-and knowled';

@Component({
  selector: 'app-skills-and-knowled',
  templateUrl: './skills-and-knowled.component.html',
  styleUrls: ['./skills-and-knowled.component.css']
})
export class SkillsAndKnowledComponent implements OnInit {
    skills: string[] = ['знання декількох мов програмування','відповідальне ставлення до виконання свого процесу та усвідомлення того, що над продуктом працює ціла команда','системне мислення','вміння проводити тестування','навичка оптимізації коду','уміння концентруватися на поставленому завданні'];
    knowledges: string[] = ['c#','winforms','.NET','WPF','JS','Python','TS','HTML','CSS'];
    SkillsAndKnowled: SkillsAndKnowled[] = [{skills: this.skills, knowledges: this.knowledges}];

  constructor() { }

  ngOnInit(): void {
  }

}
