import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare authservice
  }
}
