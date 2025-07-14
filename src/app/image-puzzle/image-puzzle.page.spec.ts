import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePuzzlePage } from './image-puzzle.page';

describe('ImagePuzzlePage', () => {
  let component: ImagePuzzlePage;
  let fixture: ComponentFixture<ImagePuzzlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
