import { DetailsService } from './service/details.service';
import { Component, OnInit } from '@angular/core';
import { statusInfo } from '../../interfaces/statusInfo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  statusValue: statusInfo[] = [];
  constructor(private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.getStatusData();
  }

  getStatusData() {
    this.detailsService.getStatusInfo().subscribe((response) => {
      console.log(response);
      this.statusValue = response;
    });
  }
}
