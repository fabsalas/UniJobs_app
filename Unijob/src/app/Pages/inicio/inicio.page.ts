import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{
  slides = [
    {
    img: '../../../assets/img/postjob.png',
    titulo: 'Publica fácilmente tu oferta  de trabajo cuando lo requieras' 
    },
    {
      img: '../../../assets/img/seejob.png',
      titulo: 'Postula cuando quieras a los trabajos que hay a tu alrededor'
    },
    {
      img: '../../../assets/img/acceptjob.png',
      titulo: 'Espera una respuesta y comienza a trabajar!'
      }
  ]
  constructor(private router: Router) {}

  ngOnInit() {
  }

}
