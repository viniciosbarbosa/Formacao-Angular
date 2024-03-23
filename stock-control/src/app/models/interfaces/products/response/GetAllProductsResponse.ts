export interface GetAllProductsResponse {
  id:string
  name:string
  amount:number
  description:string
  prince:string
  category:{
    id:string
    name:string
  }
}
