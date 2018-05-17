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
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  step5: FormGroup;
  step6: FormGroup;
  step7: FormGroup;

  select;

  ngOnInit() {
    this.step1 = this._formBuilder.group({
      engine: ['', Validators.required],
      version:['',Validators.required],
      sdk_gen:['',Validators.required]
    });
    this.step2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step3 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step4 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step5 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step6 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step7 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
