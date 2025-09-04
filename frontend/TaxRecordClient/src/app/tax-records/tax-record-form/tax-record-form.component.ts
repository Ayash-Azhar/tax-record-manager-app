


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
  recordTitle: ['', [Validators.required, Validators.maxLength(80)]],
  taxYear: [new Date().getFullYear(), [
    Validators.required,
    Validators.min(1900),
    Validators.max(new Date().getFullYear() + 1)
  ]],
  incomeAmount: [0, [Validators.required, Validators.min(0)]],
  deductionsAmount: [0, [Validators.required, Validators.min(0)]],
  notes: ['',[Validators.maxLength(500)]]
}, { validators: [this.deductionsNotMoreThanIncome()] });

private deductionsNotMoreThanIncome() {
  return (group: any) => {
    const income = +group.get('incomeAmount')?.value;
    const ded = +group.get('deductionsAmount')?.value;
    return ded <= income ? null : { dedTooHigh: true };
  };
}








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
