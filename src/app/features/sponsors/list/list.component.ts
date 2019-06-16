import { Component, OnInit } from '@angular/core';
import { SponsorsDatasource } from '../data';

@Component({
  selector: 'app-feat-sponsors-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SponsorsDatasource]
})
export class SponsorsListComponent implements OnInit {
  constructor(public source: SponsorsDatasource) {}

  ngOnInit() {}
}
