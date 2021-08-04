import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {STRINGS} from '@app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class Api {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  };

  constructor(private http: HttpClient) { }

  public async get(uri: string, params = new HttpParams()): Promise<any> {
    return await this.http
        .get<any>(`${this.resolveBaseUrl()}${uri}`, {params})
        .toPromise();
  }

  public async post(uri: string, body: string): Promise<any> {
    return await this.http
        .post<any>(`${this.resolveBaseUrl()}${uri}`, body, this.httpOptions)
        .toPromise();
  }

  public async put(uri: string, body: string): Promise<any> {
    return await this.http
        .put<any>(`${this.resolveBaseUrl()}${uri}`, body, this.httpOptions)
        .toPromise();
  }

  public async delete(uri: string, params: HttpParams = new HttpParams()): Promise<any> {
    return await this.http
        .delete(`${this.resolveBaseUrl()}${uri}`, {params})
        .toPromise();
  }

  private isLocal(): boolean {
    return location.hostname.startsWith('localhost');
  }

  private resolveBaseUrl(): string {
    if (this.isLocal()) return STRINGS.LOCAL_BASE_URL;
    return STRINGS.REMOTE_BASE_URL;
  }
}
