import { Component, OnInit } from '@angular/core';
import { UpdateGuardService } from '../../guard/update-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  id: string = '';

  constructor(
    private updateService: UpdateGuardService
  ) {}

  ngOnInit() {
    this.updateService.currentId.subscribe(value => this.id = value);
  }

}
