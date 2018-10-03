import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Otras importaciones
import { MomentModule } from 'ngx-moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';


//Componentes Creados
import { QuestionDetalleComponent } from './question/questionDetalle.component';
import { QuestionListComponent } from './question/questionList.component';
import { AnswerFormComponent } from './answer/answerForm.component';
import { SignInComponent } from './auth/signIn.component';
import { SignUpComponent } from './auth/signUp.component';
import { QuestionFormComponent } from './question/questionForm.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDetalleComponent,
    AnswerFormComponent,
    SignInComponent,
    SignUpComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
