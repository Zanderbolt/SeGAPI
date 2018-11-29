import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Unidad04 } from '../models/unidad04';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Injectable({
  providedIn: 'root'
})
export class unidad04Service {

  selectedUnidad04: Unidad04;
  readonly URL_API = 'http://localhost:3000/api/unidad04/';

  constructor(private http: HttpClient, private alumnosService:AlumnosService) { 
    this.selectedUnidad04 = new Unidad04;
  }


  postAlumno(unidad04: Unidad04) {
    return this.http.post(this.URL_API, unidad04);        
  }

  getUnidad04() {
    return this.http.get(this.URL_API + this.alumnosService.numero_cuenta);        
  }

    // Llamada de la API PUT
    actualizarUnidad04(unidad04: Unidad04)
    {                   
      return this.http.put(this.URL_API + this.alumnosService.numero_cuenta, unidad04);
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
