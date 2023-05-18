import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dashfoto } from '../../models/Dashfoto.model';

@Component({
  selector: 'app-dashfoto-form',
  templateUrl: './dashfoto-form.component.html',
  styleUrls: ['./dashfoto-form.component.scss'],
})
export class DashfotoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Dashfoto>();
  @Input() dashfotoData: Dashfoto | null = null;
  @Input() btnText!: string;

  dashfotoForm!: FormGroup;

  ngOnInit(): void {
    this.dashfotoForm = new FormGroup({
      id: new FormControl(this.dashfotoData ? this.dashfotoData.id : ''),
      title: new FormControl(this.dashfotoData ? this.dashfotoData.title : '', [
        Validators.required,
      ]),
      description: new FormControl(
        this.dashfotoData ? this.dashfotoData.description : '',
        [Validators.required]
      ),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.dashfotoForm.get('title')!;
  }

  get description() {
    return this.dashfotoForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.dashfotoForm.patchValue({ image: file });
  }

  submit() {
    if (this.dashfotoForm.invalid) {
      return;
    }

    console.log(this.dashfotoForm.value);

    this.onSubmit.emit(this.dashfotoForm.value);
  }
}
