import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTemplateComponent } from './forum-template.component';

describe('TechnologyForumComponent', () => {
  let component: ForumTemplateComponent;
  let fixture: ComponentFixture<ForumTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
