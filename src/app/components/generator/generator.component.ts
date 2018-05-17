import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  isLinear = false;
  step1: FormGroup;
  secondFormGroup: FormGroup;


  select;

  ngOnInit() {
    this.step1 = this._formBuilder.group({
      engine: ['', Validators.required],
      version:['',Validators.required],
      sdk_gen:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
