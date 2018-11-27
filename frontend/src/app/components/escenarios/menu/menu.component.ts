import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  unidad01 = false;
  unidad02 = false;
  unidad03 = false;
  unidad04 = false;
  menu = true;

  constructor() {}

  ngOnInit() {

  }

  mostrarMenu()
  {
    this.menu = true;
  }

  mostrarUnidad01() 
  {
    this.menu = false;
    this.unidad01 = true;
    this.unidad02 = false;
    this.unidad03 = false;
    this.unidad04 = false;
  }

  mostrarUnidad02() 
  {
    this.menu = false;
    this.unidad02 = true;
    this.unidad01 = false;
    this.unidad03 = false;
    this.unidad04 = false;
  }

  mostrarUnidad03() 
  {
    this.menu = false;
    this.unidad03 = true;
    this.unidad01 = false;
    this.unidad02 = false;
    this.unidad04 = false;
  }

  mostrarUnidad04() 
  {
    this.menu = false;
    this.unidad04 = true;
    this.unidad01 = false;
    this.unidad03 = false;
    this.unidad02 = false;
  }

  backToMenu() 
  {
    this.menu = true;
    this.unidad04 = false;
    this.unidad01 = false;
    this.unidad03 = false;
    this.unidad02 = false;
  }
}
