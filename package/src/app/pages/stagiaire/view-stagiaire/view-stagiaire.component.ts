import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-view-stagiaire',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule

  ],
  templateUrl: './view-stagiaire.component.html',
  styleUrls: ['./view-stagiaire.component.scss']
})
export class ViewStagiaireComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {

  }
  changeDate(date_:string) : string{
    const date = new Date(date_)
    return date.getDay() + "/" + date.getMonth() + '/'+ date.getFullYear()
  }
}
