import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.css']
})
export class HomeTeamComponent implements OnInit {
  perfiles = [
    {
      nombre: "Manuel Antonio",
      cargo: "Programador",
      frase: "Ni Steve Hawking aguantó mucho tiempo en la silla como yo programando",
      imagen: "/assets/perfiles/manuel.png",
    },
    {
      nombre: "Elizabeth Hinostroza",
      cargo: "Programadora",
      frase: "El mejor mensaje de error es aquel que nunca aparece.",
      imagen: "/assets/perfiles/elizabeth.png",
    },
    {
      nombre: "Arturo Romero",
      cargo: "Programador",
      frase: "Programar es lo más parecido que tenemos a un superpoder.",
      imagen: "/assets/perfiles/arturo.png",
    },
    {
      nombre: "Sandra Fernandez",
      cargo: "Programadora",
      frase: "Primero, resuelve el problema. Luego, escribe el código.",
      imagen: "/assets/perfiles/sandra.png",
    },
  ];
  constructor() { }
  
  ngOnInit() {
  }

}
