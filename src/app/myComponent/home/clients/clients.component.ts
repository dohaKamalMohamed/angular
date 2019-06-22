import { Component, OnInit } from '@angular/core';
declare var $: any;
declare const onClick:any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("p").dblclick(function(){
        $(this).hide();
      });
    });
  }
  clickMe(){
    onClick();
  }

}
