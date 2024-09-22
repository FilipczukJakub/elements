import {Component, Inject, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Element} from "@angular/compiler";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-element-edit-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatLabel,
    FormsModule,
    MatButton,
    MatDialogClose,
  ],
  templateUrl: './element-edit-dialog.component.html',
  styleUrl: './element-edit-dialog.component.scss'
})
export class ElementEditDialogComponent {
  readonly dialogRef = inject(MatDialogRef<Element>)

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {value: string}
  ) {

  }
}
