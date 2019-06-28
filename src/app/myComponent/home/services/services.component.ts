import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  lineChart:any;
  includeArray=[['ahmed','mohamed','hazem','samir'],[3,1,2,4]]
  player=this.includeArray[0];
  goals=this.includeArray[1];
  constructor() { }

  ngOnInit() {
    this.lineChart = new Chart('canvas', {
      type: 'line',
    data: {
     labels: this.player,
     datasets: [{
         data: this.goals,
         borderColor:"blue",
         borderWidth: 1
     }]
    }, 
    options: {
      legend: {
        display: false
     },
     scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }],
     }
    }
    });
    
  }
  onSubmit(f:NgForm){
    
  }
  
}

