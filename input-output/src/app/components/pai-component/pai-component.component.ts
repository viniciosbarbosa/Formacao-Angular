import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FilhoComponentComponent } from '../filho-component/filho-component.component';

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.css'],
})
export class PaiComponentComponent implements OnInit {
  @ViewChildren(FilhoComponentComponent)
  filhoComponent!: QueryList<FilhoComponentComponent>;

  constructor() {}

  ngOnInit() {}

  eventoFilho() {
    alert('O evento do filho funcinou');
  }

  botaoPai() {
    this.filhoComponent.forEach((filhoComponent) => {
      filhoComponent.alertDoPai();
    });
  }
}
