import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iProducts } from 'src/app/model/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  dashList: any[] = [
    {active: true, name:'123'},
    {active: false, name:'321'},
    {active: true, name:'abc'},
  ]

  constructor(
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: iProducts) => {
      res.products.map
      console.log(res.products)
    })
  }

  backPage(): Promise<boolean> {
    return this.router.navigate(['main'])
  }
}
