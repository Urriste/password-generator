import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



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

  submit(e:any){
    e.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
    }


  }

}
