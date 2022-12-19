import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-cuisine-s',
  templateUrl: './cuisine-s.component.html',
  styleUrls: ['./cuisine-s.component.css'],
})
export class CuisineSComponent implements OnInit {
  dateTime: Observable<Date>;
  categorie: any;
  constructor(
    private categorieservice: CategoriesService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dateTime = timer(0, 1).pipe(
      map(() => {
        return new Date();
      })
    );
    setInterval(()=>{
      this.Getcategorie();
      this.changeDetector.detectChanges();
    },1000);
  }

  Getcategorie() {
    this.categorieservice.getCategoryData().subscribe((res) => {
      this.categorie = res;
    });
  }
}
