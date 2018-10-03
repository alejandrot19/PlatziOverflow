import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
    selector: 'app-questionDetalle',
    templateUrl: './questionDetalle.component.html',
    styleUrls: ['./questionDetalle.component.css']
})

export class QuestionDetalleComponent {
    question: Question = new Question(
        'Esta es una nueva pregunta sobre android',
        'Tengo una duda sobre la applicacion',
        new Date,
        'devicon-android-plain'
    );
}