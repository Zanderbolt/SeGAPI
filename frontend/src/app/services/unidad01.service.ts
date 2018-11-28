import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Unidad01 } from '../models/unidad01';

@Injectable({
  providedIn: 'root'
})
export class unidad01Service {

  selectedUnidad01: Unidad01;
  readonly URL_API = 'http://localhost:3000/api/unidad01/';

  constructor(private http: HttpClient) { 
    this.selectedUnidad01 = new Unidad01;
  }

//   getAlumnos() {
//     return this.http.get(this.URL_API);    
//   }

  postAlumno(unidad01: Unidad01) {
    return this.http.post(this.URL_API, unidad01);        
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
