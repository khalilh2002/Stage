import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



interface Stagiaire {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  numTel: string; // Assuming phone number is a string
  cin: string; // Assuming CIN is a string
  image?: string; // Assuming image is a string or a specific image type
}


@Injectable({
  providedIn: 'root'
})
export class StagiairesService {
  apiUrl = environment.apiBaseUrl+'/stagiaire';

  constructor(private http:HttpClient) { }

  getStagiaires():Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(this.apiUrl+'/index')
  }

  deleteStagiaire(id:string , token:string):Observable<string>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete<string>(this.apiUrl+'/delete/'+id , {withCredentials:true , headers})
  }
  getTokenTest():any{
    return this.http.get<any>("http://127.0.0.1:8000/api/role/admin",{withCredentials:true })
  }

  cerfToken():any{
    return this.http.get<any>("http://127.0.0.1:8000/sanctum/csrf-cookie",{withCredentials:true })
  }

}
