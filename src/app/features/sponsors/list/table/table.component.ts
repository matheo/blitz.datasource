import { Component, OnInit, Input } from '@angular/core';
import { SponsorsDatasource } from '../../data';

@Component({
  selector: 'app-feat-sponsors-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class SponsorsListTableComponent implements OnInit {
  @Input() source: SponsorsDatasource;
  @Input() columns = ['name', 'tier', 'following', 'visibility'];

  constructor() {}

  ngOnInit() {}
}
