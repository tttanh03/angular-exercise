import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges,OnDestroy {
  title = 'angulark08';
  foods:Array<string>=[];
constructor() {

}
  ngOnInit () {
    this.foods=['Food 1','Food 2'];
  }
  ngOnChanges () {

  }
  ngOnDestroy () {
    
  }

    }
    
  

