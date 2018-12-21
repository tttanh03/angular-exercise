import {Component} from '@angular/core'

@Component ({
    selector: 'app-food',
    template: `
    <div class="food">
    <img src="http://www.cafecoffeeday.com/thelounge/images/ccd-lounge-cold-side.jpg" alt="mocha">
    <div class="caption">
        <h2>CaFe Mocha</h2>
        <h5>65.000 vnd</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button class="details">Details</button>
    </div>
</div>
`,
    styleUrls: ['food.component.scss']
})    

export class FoodComponent{
    //showContent: number =2;
   foodName:string;
    //food: Array<string> = ['Apple','Banana','Orange'];
}