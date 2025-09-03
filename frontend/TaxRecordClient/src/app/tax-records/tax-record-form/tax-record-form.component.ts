// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tax-record-form',
//   imports: [],
//   templateUrl: './tax-record-form.component.html',
//   styleUrl: './tax-record-form.component.css'
// })
// export class TaxRecordFormComponent {

// }


import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaxRecordService } from '../tax-record.service';
import { TaxRecord } from '../tax-record';

@Component({
  selector: 'app-tax-record-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './tax-record-form.component.html',
  styleUrls: ['./tax-record-form.component.css']
})
export class TaxRecordFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private svc = inject(TaxRecordService);

  id = signal<number | null>(null);
  isEdit = computed(() => this.id() !== null);

  form = this.fb.group({
    id: [0],
    recordTitle: ['', Validators.required],
    taxYear: [new Date().getFullYear(), Validators.required],
    incomeAmount: [0, Validators.required],
    deductionsAmount: [0, Validators.required],
    notes: ['']
  });

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.id.set(id);
      this.svc.get(id).subscribe(rec => this.form.patchValue(rec));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const value = this.form.value as TaxRecord;

    if (this.isEdit()) {
      this.svc.update(this.id()!, value).subscribe(() => this.router.navigateByUrl('/'));
    } else {
      const { id, ...createBody } = value;
      this.svc.create(createBody as Omit<TaxRecord,'id'>).subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
