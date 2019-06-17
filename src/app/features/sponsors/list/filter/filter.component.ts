import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SponsorsDatasource } from '../../data';
import { MatPaginator } from '@angular/material';
import { getterPaginator } from '@matheo/datasource';

@Component({
  selector: 'app-feat-sponsors-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class SponsorsListFilterComponent implements OnInit {
  @Input() source: SponsorsDatasource;

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.source.setPaginator(this.paginator, getterPaginator(this.paginator));
  }
}
