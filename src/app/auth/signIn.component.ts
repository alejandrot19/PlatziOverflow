import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signIn',
    templateUrl: './signIn.component.html'
    // styleUrls: ['./questionDetalle.component.css']
})

export class SignInComponent implements OnInit {

    signInForm: FormGroup;

    ngOnInit() {
        this.signInForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        if (this.signInForm.valid) {
            const { email, password } = this.signInForm.value;
            const user = new User(null, null,email, password);
            console.log(user);
        }
    }
    
}