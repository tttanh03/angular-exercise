import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/IMenu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: IMenu[] = [
    { icon: 'coffee-nut.png', name: 'Menu', iconActive: 'coffee-nut-color.png', active: false },
{ icon: 'order.png', name: 'Order', iconActive: 'order-color.png', active: false },
{ icon: 'user.png', name: 'User', iconActive: 'user-color.png', active: false }
  ]

constructor() { }

ngOnInit() {
}
onTapMenu(menu){
  this.menus.forEach((value) =>  {
    value.active = false
  })
  menu.active = true

}
}


  
  