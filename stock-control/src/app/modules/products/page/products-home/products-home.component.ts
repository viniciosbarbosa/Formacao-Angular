import { ProductsDataTransferService } from './../../../../shared/service/products/products-data-transfer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, take, takeUntil } from 'rxjs';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: []
})
export class ProductsHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$ : Subject<void> = new Subject();

  public productsDatas: Array<GetAllProductsResponse> = []

  constructor(
    private productsService : ProductsService,
    private producsDtService : ProductsDataTransferService,
    private router : Router,
    private messageService : MessageService
  ){}

  ngOnInit(): void {
    this.getServiceProductsDatas()
  }

  getServiceProductsDatas(){
    const productsLoaded = this.producsDtService.getProductsDatas();
    if(productsLoaded.length > 0){
      this.productsDatas = productsLoaded
    }else{
      this.getApiProductsDatas();

    }

    console.log('Dados de produtos hot observable' , this.productsDatas)
  }

  getApiProductsDatas(){
    this.productsService.getAllProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(response) =>{
        if(response.length > 0){
          this.productsDatas = response
          console.log('Dados de produtos por service' , this.productsDatas)
        }
      },
      error:(err) =>{
        console.log(err)
        this.messageService.add({
          severity:'error',
          summary:'Erro',
          detail:'Erro ao buscar produtos',
          life:2500
        })
        this.router.navigate(['/dashboard']);
      }

    })
  }

  ngOnDestroy(): void {
      this.destroy$.next()
      this.destroy$.complete()
  }
}
