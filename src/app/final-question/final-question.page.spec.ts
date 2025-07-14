import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalQuestionPage } from './final-question.page';

describe('FinalQuestionPage', () => {
  let component: FinalQuestionPage;
  let fixture: ComponentFixture<FinalQuestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
