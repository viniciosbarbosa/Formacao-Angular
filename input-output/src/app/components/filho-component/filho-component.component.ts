import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  templateUrl: './filho-component.component.html',
  styleUrls: ['./filho-component.component.css'],
})
export class FilhoComponentComponent implements OnInit {
  forEach(arg0: (filhoComponent: any) => void) {
    throw new Error('Method not implemented.');
  }
  @Input() titulo: string = '';
  @Output() clickFilho: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  btnClick() {
    this.clickFilho.emit();
  }

  alertDoPai() {
    console.log('O evento do pai funcionou ' + this.titulo);
  }
  ngOnInit() {}
}
