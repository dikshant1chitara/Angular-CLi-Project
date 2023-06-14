import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    course: '',
    gender: '',
    profileImage: null
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.user.profileImage = file;
    }
  }

  getUserImageSrc() {
    return this.user.profileImage ? URL.createObjectURL(this.user.profileImage) : '';
  }
}
