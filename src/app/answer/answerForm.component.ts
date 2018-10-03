import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-answerForm',
    templateUrl: './answerForm.component.html',
    styleUrls: ['./answerForm.component.css']
})

export class AnswerFormComponent {
    @Input() question: Question;
    
    onSubmit(form: NgForm){
        const answer = new Answer(
            form.value.description,
            this.question,
            new Date,
            new User('Alejandro', 'Torres', null, null)
        );
        this.question.answers.unshift(answer);
        form.reset();
    }
}