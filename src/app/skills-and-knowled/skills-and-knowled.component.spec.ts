import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndKnowledComponent } from './skills-and-knowled.component';

describe('SkillsAndKnowledComponent', () => {
  let component: SkillsAndKnowledComponent;
  let fixture: ComponentFixture<SkillsAndKnowledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndKnowledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndKnowledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
