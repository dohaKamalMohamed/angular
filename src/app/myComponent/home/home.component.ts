import { Component, OnInit } from '@angular/core';
declare const openNav:any;
declare const closeNav:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 openNav(){
  openNav() ;
}


 closeNav(){
  closeNav()
}
  
}
