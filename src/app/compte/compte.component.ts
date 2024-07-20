import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  message!: string;

  constructor(
    private service: ServicesService
  ) { }

  ngOnInit(): void {
  this.hello();
  }

  hello() {
    this.service.hello().subscribe(
      (response) =>{
        console.log(response);
        this.message = response.message;
      }
    )
  }

}
