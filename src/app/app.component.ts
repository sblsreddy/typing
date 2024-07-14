import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText = faker.lorem.sentence();
  enteredText ='';
  //solved = false;
  
  onInput(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    /*  if(value === this.randomText){
      this.solved = true;
      } */
     
     this.enteredText = value;
     //throw new Error('Method not implemented.');
    }
    
    compare(randomLetter: string, enteredLetter: string) {
      if(!enteredLetter){
        return 'pending';        
      }

      return randomLetter === enteredLetter ? 'correct' : 'incorrect';
      
    //throw new Error('Method not implemented.');
    }
 
}

