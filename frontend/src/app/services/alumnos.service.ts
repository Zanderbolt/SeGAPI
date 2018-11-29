import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Alumnos } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  numero_cuenta: "";

  selectedAlumno: Alumnos;
  readonly URL_API = 'http://localhost:3000/api/alumnos/';

  constructor(private http: HttpClient) { 
    this.selectedAlumno = new Alumnos;
  }

  getAlumnos() {
    return this.http.get(this.URL_API);    
  }

  postAlumno(Alumnos: Alumnos) {
    return this.http.post(this.URL_API, Alumnos);        
  }

  getAlumno(numero_cuenta: string)
  {
    return this.http.get(this.URL_API + numero_cuenta);        
  }

  login(body:any){
    // console.log(body.numero_cuenta);

    //Se guarda el número de cuenta
    this.numero_cuenta = body.numero_cuenta;      
    return this.http.post('http://localhost:3000/api/alumnos/login/', body);
     
  }

  getNumeroCuenta() {
    return this.http.get('http://localhost:3000/api/alumnos/username/', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });    
    
  }

}
