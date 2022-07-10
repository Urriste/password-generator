import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  alphabetLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",":",";","/","?","<",">",",","."];
  numbers = ["1","2","3","4","5","6","7","8","9","0"];

  passwordValues:String[] = [];
  password!:String;

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    includeUppercase: [false],
    includeLowercase: [false],
    includeSymbol: [false],
    includeNumber: [false],
    length: [5]
  })

  ngOnInit(): void {
  }

  shuffle(arr: any): Array<any> {
    var i,j,temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
  }

  
  randomNumber(min:number,max:number){
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  getPasswordValues(form:any,password:String[]): String[]{

    while(password.length < (form.length + 1)) {
      
      if(form.includeLowercase && password.length < (form.length + 2) ){
        let num = this.randomNumber(0,25); 
        password.push(this.alphabetLowercase[num]);
      }

      if(form.includeUppercase && password.length < (form.length + 2)){
        let num = this.randomNumber(0,25); 
        password.push(this.alphabetUppercase[num]);
      }

      if(form.includeSymbol && password.length < (form.length + 2)){
        let num = this.randomNumber(0,21);
        password.push(this.symbols[num]);
      }

      if(form.includeNumber && password.length < (form.length + 2)){
        let num = this.randomNumber(0,9);
        password.push(this.numbers[num]); 
      }

      
      
    }

    return password;
  }


  

  getRandomPassword(form:any){

    let pass: String[] = [];
    
    this.passwordValues = this.getPasswordValues(form,pass);

    this.passwordValues = this.shuffle(this.passwordValues);

    

    this.passwordValues = this.passwordValues.splice(0,this.passwordValues.length - 1);
    
    this.password = this.passwordValues.join("");

    console.log(this.password)

  }



  submit(e:any){
    e.preventDefault();
    if(this.form.valid){
      let form = this.form.value;
      this.getRandomPassword(form);
      
    }
    

  }

}
