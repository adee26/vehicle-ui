import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TractorService {

  constructor(private http: HttpClient) { }

  getTractor(){
    return this.http.get('/server/api/v1/tractor');
  }

  getTractorById(id: number){
    return this.http.get('/server/api/v1/tractor/' + id);
  }

  saveMTractor(tractor){
    return this.http.post('/server/api/v1/tractor', tractor, httpOptions);
  }

  deleteTractorById(id: number){
    return this.http.delete('/server/api/v1/tractor/' + id);
  }
}
