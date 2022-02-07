import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //Devuelve los datos del archivo json
  getDataFromJson():Observable<any>{
    return this.http.get('../assets/data/subsecciones.json');
  }

}
