import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tokenActive = false;


  constructor(private alumnosService: AlumnosService) {
    this.alumnosService.getNumeroCuenta()
    .subscribe(
      data => this.tokenActive = true,
      error => this.tokenActive = false
    )     
  }

  ngOnInit() {
  }

  logout() {    
    localStorage.removeItem('token');
  }

}
