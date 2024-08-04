import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {
  apiUrl = environment.apiBaseUrl+'/stagiaire';

  constructor(private http:HttpClient) { }

  getStagiaire():Observable<any>{
    return this.http.get(this.apiUrl+'/index')
  }
}
