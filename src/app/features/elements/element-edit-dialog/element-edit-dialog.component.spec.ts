import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEditDialogComponent } from './element-edit-dialog.component';

describe('ElementEditDialogComponent', () => {
  let component: ElementEditDialogComponent;
  let fixture: ComponentFixture<ElementEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
