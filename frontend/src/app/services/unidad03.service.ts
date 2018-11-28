import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Unidad03 } from '../models/unidad03';

@Injectable({
  providedIn: 'root'
})
export class unidad03Service {

  selectedUnidad03: Unidad03;
  readonly URL_API = 'http://localhost:3000/api/unidad03/';

  constructor(private http: HttpClient) { 
    this.selectedUnidad03 = new Unidad03;
  }

//   getAlumnos() {
//     return this.http.get(this.URL_API);    
//   }

  postAlumno(unidad03: Unidad03) {
    return this.http.post(this.URL_API, unidad03);
  }

//   login(body:any){
//     // console.log(body.numero_cuenta);
//     return this.http.post('http://localhost:3000/api/alumnos/login/', body);        
//   }

//   getNumeroCuenta() {
//     return this.http.get('http://localhost:3000/api/alumnos/username/', {
//       observe: 'body',
//       params: new HttpParams().append('token', localStorage.getItem('token'))
//     });    
    
//   }

}
