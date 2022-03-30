import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private coServer: HttpClient) { }

  getProduto(id: any){
    return this.coServer.get(`http://localhost:3000/produto/${id}`)
  }

  getQuestionario(){
    return this.coServer.get(`http://localhost:3000/questionario`)
  }
}
