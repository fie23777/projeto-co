import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'filha',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnChanges  {

  constructor(private homeProdutos: ServerService) { }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('Change ', this.numeroId.nativeElement.value)
   console.log(changes)
  }

  @Input() nomecoFilha: any;
  @ViewChild('numeroId', {read: ElementRef}) numeroId!: ElementRef;

   produtos = {}
   id: any;
   ngAfterViewInit(): void{
     this.id = this.numeroId.nativeElement.value
      console.log("Inicio ",this.numeroId.nativeElement.value)
   }
  ngOnInit(): void {
  }

  buscarProduto(){
    this.ngAfterViewInit();
    console.log('Id ',this.id)
    this.homeProdutos.getProduto(this.id).subscribe(p => this.produtos = p)
  }

}
