import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../add-productos/productos.service';
import { Productos } from '../add-productos/model/productos';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.page.html',
  styleUrls: ['./edit-productos.page.scss'],
})
export class EditProductosPage implements OnInit {

  producto: Productos = new Productos({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productosService: ProductosService,
    //private producto:  Productos
  ) { }

  ngOnInit() {
    this.loadProducto();
  }

  loadProducto() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productosService.getProducto(productId).subscribe((data) => {
        this.producto = data;
      });
    } else {
      // Handle the null case, e.g., redirect or show an error
      console.error('Product ID is null');
      this.router.navigate(['/lista-productos']);
    }
  }
  

  updateProducto() {
    this.productosService.updateProducto(this.producto).subscribe((response) => {
      if (response) {
        console.log('Producto actualizado correctamente', response);
        this.router.navigate(['/lista-productos']);
      }
    });
  }
}
