


import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaxRecordService } from '../tax-record.service';
import { TaxRecord } from '../tax-record';

@Component({
  selector: 'app-tax-record-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tax-record-list.component.html',
  styleUrls: ['./tax-record-list.component.css']
})
export class TaxRecordListComponent {
  private svc = inject(TaxRecordService);

  // raw data
  records = signal<TaxRecord[]>([]);

  // UI state
  search = signal<string>('');
  year = signal<string>(''); // '' = all
  sortBy = signal<'taxYear' | 'incomeAmount' | ''>('');
  sortDir = signal<'asc' | 'desc'>('asc');

  // derived, filtered + sorted view
  viewRecords = computed(() => {
    let data = this.records();

    // filter by year
    const y = this.year();
    if (y) data = data.filter(r => String(r.taxYear) === y);

    // filter by title
    const q = this.search().trim().toLowerCase();
    if (q) data = data.filter(r => r.recordTitle.toLowerCase().includes(q));

    // sort
    const key = this.sortBy();
    const dir = this.sortDir();
    if (key) {
      const mul = dir === 'asc' ? 1 : -1;
      data = [...data].sort((a, b) => {
        const av = key === 'taxYear' ? a.taxYear : a.incomeAmount;
        const bv = key === 'taxYear' ? b.taxYear : b.incomeAmount;
        return av === bv ? 0 : (av < bv ? -1 : 1) * mul;
      });
    }
    return data;
  });

  constructor() { this.load(); }

  load() {
    this.svc.getAll().subscribe(data => this.records.set(data));
  }

  onDelete(r: TaxRecord) {
    if (!confirm(`Delete "${r.recordTitle}"?`)) return;
    this.svc.delete(r.id).subscribe(() => this.load());
  }

  // convenience: distinct years for the dropdown
  years(): string[] {
    return [...new Set(this.records().map(r => String(r.taxYear)))].sort();
  }

  // tiny handlers to keep template simple & type-safe
  onSearch(v: string) { this.search.set(v); }
  onYear(v: string)   { this.year.set(v); }
  onSortBy(v: string) { this.sortBy.set(v as 'taxYear' | 'incomeAmount' | ''); }
  onSortDir(v: string){ this.sortDir.set(v as 'asc' | 'desc'); }
}

