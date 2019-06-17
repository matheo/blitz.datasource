import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SponsorsDatasource } from '../../data';
import { MatPaginator } from '@angular/material';
import { getterPaginator, DataSourceItem } from '@matheo/datasource';
import { FormBuilder, FormGroup } from '@angular/forms';

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

    this.source.addOptional({
      stream: this.form.valueChanges,
      getter: () => this.form.value
    });

    this.source.setPaginator(this.paginator, getterPaginator(this.paginator));
  }
}
