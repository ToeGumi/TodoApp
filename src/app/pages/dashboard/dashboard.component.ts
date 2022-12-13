import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isUpdate?: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isUpdate = this.router.url.includes('/update');
      }
    })
  }

}
