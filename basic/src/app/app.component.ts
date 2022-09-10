import { Component, ɵɵsetComponentScope } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';
  imgURL = 'https://picsum.photos/id/237/200/300'

  getName(){
    return this.getName.length
  }
  chamgeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event)
  }
}
