import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./listagem/listagem.component";
import { ProdutoRoutingModule } from "./produto-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [CadastroComponent, ListagemComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
})
export class ProdutoModule {}
