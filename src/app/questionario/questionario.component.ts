import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  constructor(private homeProdutos: ServerService) { }
  questionario: any = []

  ngOnInit(): void {
    this.homeProdutos.getQuestionario().subscribe(p => this.questionario = p)
  }

}
