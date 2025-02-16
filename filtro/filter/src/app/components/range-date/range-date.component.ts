import { statusInfo } from './../../interfaces/statusInfo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { filterOptions } from '../../interfaces/filterOptions';

@Component({
  selector: 'app-range-date',
  templateUrl: './range-date.component.html',
  styleUrl: './range-date.component.scss',
})
export class RangeDateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Input({ required: true }) statusData: statusInfo[] = [];
  formRangeDate!: FormGroup;
  @Output('formData') formData = new EventEmitter<filterOptions>();

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formRangeDate = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      rangeDate: this.fb.group({
        start: [null, Validators.required],
        end: [null, [Validators.required, this.maxDateToday]],
      }),
      status: [null, Validators.required],
    });
  }

  maxDateToday(control: AbstractControl) {
    const selectDate = control.value;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectDate && new Date(selectDate) > today) {
      return { maxDateToday: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.formRangeDate.value);
  }
}
