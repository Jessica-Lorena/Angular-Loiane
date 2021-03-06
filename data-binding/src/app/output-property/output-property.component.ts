import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['mudouValor'] menos usado, mas funciona
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  incrementa() {
    console.log(this.campoValorInput?.nativeElement.value);
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
