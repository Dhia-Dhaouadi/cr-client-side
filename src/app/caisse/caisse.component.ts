import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css'],
})
export class CaisseComponent implements OnInit {
  dateTime: Observable<Date>;
  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.dateTime = timer(0, 1).pipe(
      map(() => {
        return new Date();
      })
    );
  }
  openLgModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'lg' })
      .result.then((result) => {
        console.log('Modal closed' + result);
      })
      .catch((res) => {});
  }

  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
    Swal.fire({
      position: 'top-end',
      title: 'Vous êtes Déconnecté',
      text: '',
      showConfirmButton: false,
      timer: 3000,
      icon: 'success',
    });
  }
}
