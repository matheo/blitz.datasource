import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { SponsorsDatasource } from '../../data';

@Component({
  selector: 'app-feat-sponsors-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class SponsorsListTableComponent implements OnInit {
  @Input() source: SponsorsDatasource;
  @Input() columns = ['name', 'tier', 'following', 'visibility'];

  @ViewChild('sort', { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.source.setSort(this.sort);
  }
}
