import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { DataSourceItem } from '@matheo/datasource';
import { startWith } from 'rxjs/operators';
import { SponsorsDatasource } from '../../data';

@Component({
  selector: 'app-feat-sponsors-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsListFilterComponent implements OnInit {
  form: FormGroup;
  tiers: Array<DataSourceItem>;

  @Input() source: SponsorsDatasource;

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.tiers = [
      { value: 0, title: 'All Tiers' },
      { value: 1, title: 'Tier $1' },
      { value: 2, title: 'Tier $2' },
      { value: 3, title: 'Tier $3' },
      { value: 4, title: 'Tier $4' },
      { value: 5, title: 'Tier $5' }
    ];

    this.form = this.builder.group({
      tier: 0
    });

    this.source.addStream({
      name: 'sponsors.filter',
      stream: this.form.valueChanges.pipe(startWith(this.form.value))
    });

    this.source.setPaginator(this.paginator);
  }
}
