import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./listagem/listagem.component";
import { ProdutoRoutingModule } from "./produto-routing.module";

@NgModule({
  declarations: [CadastroComponent, ListagemComponent],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
