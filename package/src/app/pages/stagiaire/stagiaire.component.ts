import { Component, ViewChild, viewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StagiairesService } from 'src/app/services/stagiaires.service';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';



@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [RouterLink , MatTableModule , MatPaginatorModule],
  templateUrl: './stagiaire.component.html',
})
export class StagiaireComponent implements OnInit{
  stagiaires:any = null
  dataSource:any = null

  displayedColumns: string[] = ['ID','Nom','Prenom','Email','Cin',''];
  index = 0


  length = 100
  pageSize = 10
  pageSizeOptions:number[] = [5,10,20,50,100,200]

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  pageEvent: PageEvent | undefined;



  constructor(private stagiairesService:StagiairesService) {}

  ngOnInit(): void {
    this.stagiairesService.getStagiaire().subscribe({
      next:(res)=>{
        this.stagiaires  = res;

        this.dataSource = this.stagiaires.slice(0,this.pageSize);
        this.dataSource.paginator = this.paginator

      }
    })
  }

  onPaginateChange(event: PageEvent) {
    this.pageEvent = event;
    this.pageSize = event.pageSize;
    this.length = event.length;


    const startIndex = this.pageSize * event.pageIndex;
    const endIndex = startIndex + this.pageSize;


    this.dataSource =  new MatTableDataSource(this.stagiaires.slice(startIndex, endIndex));
  }


}
