import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Productos } from './model/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://memoriapi.onrender.com/productos';
  constructor(private http: HttpClient) {}

  regitroProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  getProducto(id: string): Observable<Productos> {
    return this.http.get<Productos>(`${this.apiUrl}/${id}`);
  }
  
  updateProducto(producto: Productos): Observable<any> {
    return this.http.put(`${this.apiUrl}/${producto.id}`, producto);
  }

}