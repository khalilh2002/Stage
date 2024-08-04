import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { StagiairesService } from 'src/app/services/stagiaires.service';



@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [RouterLink , MatTableModule],
  templateUrl: './stagiaire.component.html',
})
export class StagiaireComponent implements OnInit{
  stgiaires:any = null
  
  constructor(private stagiairesService:StagiairesService) {}

  ngOnInit(): void {
    this.stagiairesService.getStagiaire().subscribe({
      next:(res)=>{
        
        this.stgiaires  = res;
        console.log(this.stgiaires);

      }
    })
  }


}
