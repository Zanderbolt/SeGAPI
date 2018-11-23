import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Alumnos } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

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

  login(body:any){
    // console.log(body.numero_cuenta);
    return this.http.post('http://localhost:3000/api/alumnos/login/', body);        
  }

}
