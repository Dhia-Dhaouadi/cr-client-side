import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { UsersModel } from '../model/Users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css'],
})
export class PointageComponent implements OnInit {
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
    setInterval(() => {
      this.Getpointage();
      this.changeDetector.detectChanges();
    }, 1000);
  }

  Getpointage() {
    this.userservice.getUsersData().subscribe((res) => {
      this.users = res;
    });
  }
  Deletepointage(id: any) {
    this.userservice.deleteUser(id).subscribe((res) => {
      this.Getpointage();
      Swal.fire({
        position: 'top-end',
        title: 'Pointage supprimé',
        text: '',
        showConfirmButton: false,
        timer: 1500,
        icon: 'success',
      });
    });
  }
  updateUser(user: UsersModel) {
    this.userservice.updateUser(user.id, user).subscribe((res) => {
      this.response=res;
      this.Getpointage();
      if (this.response.message =="User updated succefully") {
        Swal.fire({
          position: 'top-end',
          title: 'Pointage modifié',
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

  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
        console.log('Modal closed' + result);
      })
      .catch((res) => {});
  }

  OnTableDataChange(event: any) {
    this.Page = event;
    this.Getpointage();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.Getpointage();
  }
}
