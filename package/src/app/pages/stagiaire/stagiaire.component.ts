import { Component, ViewChild, ChangeDetectionStrategy, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StagiairesService } from 'src/app/services/stagiaires.service';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ViewStagiaireComponent } from './view-stagiaire/view-stagiaire.component';
import { map } from 'rxjs';


@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [
    RouterLink ,
    MatTableModule ,
    MatPaginatorModule ,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,

  ],
  templateUrl: './stagiaire.component.html',
  styleUrl:'./stagiaire.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class StagiaireComponent implements OnInit{

  data:any
  readonly dialog = inject(MatDialog);

  stagiaires:any = null
  dataSource:any = null

  displayedColumns: string[] = ['ID','Nom','Prenom','Email','Cin','Action'];
  index = 0


  length = 100
  pageSize = 10
  pageSizeOptions:number[] = [5,10,20,50,100,200]


  pageEvent: PageEvent | undefined;


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;



  constructor(private stagiairesService:StagiairesService) {}

  ngOnInit(): void {

    this.stagiairesService.getStagiaires().subscribe({
      next:(res)=>{

        this.stagiaires  = res;
        this.dataSource = this.stagiaires.slice(0,this.pageSize);
        this.data = res[0]

      }
    })
  }
/**
 *TODO : add login to get the token from by using "$user->createToken()" and save it in cookie or localStorage
 *TODO : this is based on "sactum" package in PHP for backend
 */
  deleteStagiaire(id:string):void{
    console.info(id)
    const token = "2|52m95n5ipOZlw27xs2jGfzP2LorgAJXHA8aFotQp004e2164" //token will comme from cookie or localstorage and put it here
    this.stagiairesService.deleteStagiaire(id , token).subscribe(
      {
        next:(res:any)=>{
          console.info(res);
          alert(res?.message)

        }
      }
    )
  }

  openDialog(stagiaire:any) {
    const dialogRef = this.dialog.open(ViewStagiaireComponent,{
      data:stagiaire
    });

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
