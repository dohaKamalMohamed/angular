import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lineChart:any;
  player=['ahmed','mohamed','hazem','samir'];
  goals=[3,1,2,4];
  constructor() { }

  ngOnInit() {
    this.lineChart = new Chart('canvas', {  
      type: 'pie',  
      data: {  
        labels: this.player,  
        datasets: [  
          {  
            data: this.goals,  
            borderColor: '#3cba9f',  
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",  
              "#4C4CFF",  
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "Blue",  
              "Red",  
              "Blue"  
            ],  
            fill: true  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        
      }  
    });  
  
}  
  

}
