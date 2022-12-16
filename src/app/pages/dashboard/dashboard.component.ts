import { Component, OnInit } from '@angular/core';
import { UpdateGuardServiceService } from './update-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  id: string = '';
  
  constructor(
    private updateService: UpdateGuardServiceService
  ) {}

  ngOnInit() {
    this.updateService.currentId.subscribe(value => this.id = value);
  }

}
