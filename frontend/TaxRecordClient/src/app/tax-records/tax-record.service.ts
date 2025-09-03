// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
// import { TaxRecord } from './tax-record';

// @Injectable({ providedIn: 'root' })
// export class TaxRecordService {
//   private http = inject(HttpClient);
//   private base = `${environment.apiUrl}/api/taxrecords`;

//   getAll(): Observable<TaxRecord[]> {
//     return this.http.get<TaxRecord[]>(this.base);
//   }

//   get(id: number): Observable<TaxRecord> {
//     return this.http.get<TaxRecord>(`${this.base}/${id}`);
//   }

//   create(body: Omit<TaxRecord, 'id'>): Observable<TaxRecord> {
//     return this.http.post<TaxRecord>(this.base, body);
//   }

//   update(id: number, body: TaxRecord): Observable<void> {
//     return this.http.put<void>(`${this.base}/${id}`, body);
//   }

//   delete(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.base}/${id}`);
//   }
// }


import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TaxRecord } from './tax-record';

@Injectable({ providedIn: 'root' })
export class TaxRecordService {
  private http = inject(HttpClient);
  private base = `${environment.apiUrl}/api/taxrecords`;

  getAll(): Observable<TaxRecord[]> 
  
  { return this.http.get<TaxRecord[]>(this.base); }

  get(id: number): Observable<TaxRecord> 
  
  { return this.http.get<TaxRecord>(`${this.base}/${id}`); }

  create(body: Omit<TaxRecord, 'id'>): Observable<TaxRecord> 
  
  { return this.http.post<TaxRecord>(this.base, body); }
  
  update(id: number, body: TaxRecord): Observable<void> 
  
  { return this.http.put<void>(`${this.base}/${id}`, body); }
  delete(id: number): Observable<void> 
  { return this.http.delete<void>(`${this.base}/${id}`); }
}
