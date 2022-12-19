import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import { UsersModel } from '../model/Users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css'],
})
export class LivreurComponent implements OnInit {
  users: any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  TableSizes: any = [5, 10, 15, 20];
  response:any;
  constructor(
    private userservice: UsersService,
    private modalService: NgbModal,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setInterval(()=>{
      this.Getlivreur();
      this.changeDetector.detectChanges();
    },1000);
  }

  Getlivreur() {
    this.userservice.getUsersData().subscribe((res) => {
      this.users = res;
    });
  }
  Deletelivreur(id: any) {
    this.userservice.deleteUser(id).subscribe((res) => {
      this.Getlivreur();
      Swal.fire({
        position: 'top-end',
        title: 'Livreur supprimé',
        text: '',
        showConfirmButton: false,
        timer: 1500,
        icon: 'success',
      });
    });
  }

  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
        console.log('Modal closed' + result);
      })
      .catch((res) => {});
  }

  updateUser(user: UsersModel) {
    this.userservice.updateUser(user.id, user).subscribe((res) => {
      this.response=res;
      this.Getlivreur();
      if (this.response.message =="User updated succefully") {
        Swal.fire({
          position: 'top-end',
          title: 'Livreur modifié',
          text: '',
          showConfirmButton: false,
          timer: 1500,
          icon: 'success',
        });
      } else {
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne va pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
        window.location.reload();
      }
    });
  }

  OnTableDataChange(event: any) {
    this.Page = event;
    this.Getlivreur();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.Getlivreur();
  }
}
