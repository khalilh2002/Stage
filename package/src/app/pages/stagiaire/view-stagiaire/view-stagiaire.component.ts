import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-view-stagiaire',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './view-stagiaire.component.html',
  styleUrls: ['./view-stagiaire.component.scss']
})
export class ViewStagiaireComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {

  }
}
