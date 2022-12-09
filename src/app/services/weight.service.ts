import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footballer } from '../models/footballer.model';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  private url = 'http://localhost:8080/footballers/{id}/weight'

  constructor() { }
}