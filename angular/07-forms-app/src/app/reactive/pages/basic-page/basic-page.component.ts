import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

const rtx5090 = {
  name: 'RTX5090',
  price: 2500,
  inStorage: 50
}


@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {
  public myFormGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  getFieldError(field: string): string {

    if (!this.myForm.controls[field]) return '';

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';

        case 'minlength':
          return `El campo debe tener mínimo ${errors['minlength'].requiredLength} caracteres`;

        default:
          break;
      }
    }
    return '';
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSave(): void {
    if (this.myForm.invalid) return;

    this.myForm.reset({ price: 10, inStorage: 0 });
  }
}
