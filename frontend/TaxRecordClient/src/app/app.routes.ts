import { Routes } from '@angular/router';
import { TaxRecordListComponent } from './tax-records/tax-record-list/tax-record-list.component';
import { TaxRecordFormComponent } from './tax-records/tax-record-form/tax-record-form.component';

export const routes: Routes = [
  { path: '', component: TaxRecordListComponent },
  { path: 'new', component: TaxRecordFormComponent },
  { path: ':id/edit', component: TaxRecordFormComponent },
  { path: '**', redirectTo: '' }
];
