import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-api-page',
  standalone: true,
  imports: [],
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.css'
})
export class ApiPageComponent {
  constructor(private service: ApiService){}
  apiData!:any[];
  
  ngOnInit(){
    this.service.getData().subscribe( {
      next: data => {
        this.apiData = data;
      }
    });
  }
}
