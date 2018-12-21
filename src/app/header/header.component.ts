import {Component} from '@angular/core'

@Component ({
    selector: 'app-header',
    template: `<div class="header">
    <p class="header-name">MENU</p>
    <div class="noti"></div>
</div>`,
    styleUrls: ['header.component.scss']
})    

export class HeaderComponent{
    headerName:string;
}