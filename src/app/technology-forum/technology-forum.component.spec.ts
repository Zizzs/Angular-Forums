import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyForumComponent } from './technology-forum.component';

describe('TechnologyForumComponent', () => {
  let component: TechnologyForumComponent;
  let fixture: ComponentFixture<TechnologyForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
