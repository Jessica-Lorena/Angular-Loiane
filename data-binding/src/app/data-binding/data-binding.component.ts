import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/400/200';
  valorSalvo: any = '';
  valorAtual: any = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular'

  getValor(){
    return 1;
  };

  getCurtirCurso(){
    return true;
  }
  
  botaoClicado(){
    alert()
  }
   
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value)
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit(): void {
  }

}
