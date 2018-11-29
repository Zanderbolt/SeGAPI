import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Unidad01 } from '../models/unidad01';

import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from '../models/alumnos';



@Injectable({
  providedIn: 'root'
})
export class unidad01Service {

  selectedUnidad01: Unidad01;
  numero_cuenta;
  temp;
  readonly URL_API = 'http://localhost:3000/api/unidad01/';

  constructor(private http: HttpClient, private alumnosService: AlumnosService) { 
   this.selectedUnidad01 = new Unidad01;
   this.getUnidad01()
   .subscribe(
     data => {this.selectedUnidad01.antecedentes_comunidad = data["antecedentes_comunidad"],
              this.selectedUnidad01.infraestructura_equipamiento = data["infraestructura_equipamiento"]}
   )
  }

//   getAlumnos() {
//     return this.http.get(this.URL_API);    
//   }

  postAlumno(unidad01: Unidad01) {
    return this.http.post(this.URL_API, unidad01);        
  }

   getUnidad01()
  {               
    return this.http.get(this.URL_API + this.alumnosService.numero_cuenta);        
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
