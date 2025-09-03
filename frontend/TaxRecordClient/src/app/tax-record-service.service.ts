// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaxRecordServiceService {

//   constructor() { }
// }


import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { TaxRecord } from './tax-records/tax-record';

@Injectable({ providedIn: 'root' })
export class TaxRecordService {
  private http = inject(HttpClient);
  private base = `${environment.apiUrl}/api/taxrecords`;

  /** GET: all tax records */
  getTaxRecords(): Observable<TaxRecord[]> {
    return this.http.get<TaxRecord[]>(this.base);
  }

  /** GET: single record by id */
  getTaxRecord(id: number): Observable<TaxRecord> {
    return this.http.get<TaxRecord>(`${this.base}/${id}`);
  }

  /** POST: create a new record (server generates Id) */
  createTaxRecord(body: Omit<TaxRecord, 'id'>): Observable<TaxRecord> {
    return this.http.post<TaxRecord>(this.base, body);
  }

  /** PUT: update an existing record */
  updateTaxRecord(id: number, body: TaxRecord): Observable<void> {
    return this.http.put<void>(`${this.base}/${id}`, body);
  }

  /** DELETE: remove a record */
  deleteTaxRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
