import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
    '¿Como utilizo un componente en Android',
    'Esta es mi pregunta',
    new Date(),
    'none'
)

@Component({
    selector: 'app-questionList',
    templateUrl: './questionList.component.html',
    styles: [`
        i {
            font-size: 48px;
        }

        i.help {
            width: 48px !important;
            height: 48px !important;
            font-size: 48px !important;
            padding: 0 !important;
        }
        
    `]
})

export class QuestionListComponent {

    questions: Question[] = new Array(10).fill(q);


}