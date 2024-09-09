import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

class DialogAnimationsExampleDialog {
}

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
    MatDialogTitle
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  constructor(public dialog: MatDialogRef<DialogAnimationsExampleDialog>) {}

  onCancelClick(): void {
    this.dialog.close(false);
  }

  onConfirmClick(): void {
    this.dialog.close(true);
  }
}
