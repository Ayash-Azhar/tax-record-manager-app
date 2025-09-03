// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tax-record-list',
//   imports: [],
//   templateUrl: './tax-record-list.component.html',
//   styleUrl: './tax-record-list.component.css'
// })
// export class TaxRecordListComponent {

// }


import { Component, inject, signal } from '@angular/core';
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
  records = signal<TaxRecord[]>([]);

  constructor() {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe(data => this.records.set(data));
  }

  onDelete(r: TaxRecord) {
    if (!confirm(`Delete "${r.recordTitle}"?`)) return;
    this.svc.delete(r.id).subscribe(() => this.load());
  }
}
