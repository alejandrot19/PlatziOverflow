import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons  from './icons';

@Component({
    selector: 'app-questionForm',
    templateUrl: './questionForm.component.html'
    // styleUrls: ['./questionDetalle.component.css']
})

export class QuestionFormComponent {

    icons: Object[] = icons;

    getIconVersion(icon: any) {
        let version;
        if (icon.versions.font.includes('plain-wordmark')) 
            version = 'plain-wordmark'
        else
            version = icon.versions.font[0];
        return version;
    }

    onSubmit(form: NgForm) {
        const q = new Question(form.value.title, form.value.description);
        console.log(q);
    }
}