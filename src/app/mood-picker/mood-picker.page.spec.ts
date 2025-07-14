import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoodPickerPage } from './mood-picker.page';

describe('MoodPickerPage', () => {
  let component: MoodPickerPage;
  let fixture: ComponentFixture<MoodPickerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
