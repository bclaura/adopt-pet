import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  success = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.success = true;
      setTimeout(() => this.success = false, 4000);
      form.resetForm();
    }
  }
}
