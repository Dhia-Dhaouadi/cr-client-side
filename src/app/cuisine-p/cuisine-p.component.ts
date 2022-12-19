import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-cuisine-p',
  templateUrl: './cuisine-p.component.html',
  styleUrls: ['./cuisine-p.component.css']
})
export class CuisinePComponent implements OnInit {
  dateTime: Observable<Date>;
  constructor() {}

  ngOnInit(): void {
    this.dateTime = timer(0, 1).pipe(
      map(() => {
        return new Date();
      })
    );
  }

}
