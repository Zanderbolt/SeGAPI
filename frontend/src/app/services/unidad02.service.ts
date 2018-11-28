import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Unidad02 } from '../models/unidad02';

@Injectable({
  providedIn: 'root'
})
export class unidad02Service {

  selectedUnidad02: Unidad02;
  readonly URL_API = 'http://localhost:3000/api/unidad02/';

  constructor(private http: HttpClient) { 
    this.selectedUnidad02 = new Unidad02;
  }

//   getAlumnos() {
//     return this.http.get(this.URL_API);    
//   }

  postAlumno(unidad02: Unidad02) {
    return this.http.post(this.URL_API, unidad02);        
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
