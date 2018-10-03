import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html'
    // styleUrls: ['./questionDetalle.component.css']
})

export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;

    ngOnInit() {
        this.signUpForm = new FormGroup({
            nombre: new FormControl(null, Validators.required),
            apellido: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        if (this.signUpForm.valid) {
            const { nombre, apellido, email, password } = this.signUpForm.value;
            const user = new User(nombre, apellido, email, password);
            console.log(user);
        }
    }
    
}