import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./listagem/listagem.component";
import { ProdutoRoutingModule } from "./produto-routing.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [CadastroComponent, ListagemComponent],
  imports: [CommonModule, ProdutoRoutingModule, MatCardModule, MatButtonModule],
})
export class ProdutoModule {}
