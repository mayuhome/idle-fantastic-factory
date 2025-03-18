import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  time = 0;
  timer$ = interval(1000).pipe(tap(() => {    
    this.time++;
  }));
  constructor() { }
}
