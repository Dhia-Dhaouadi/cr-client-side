import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ClientModel } from '../model/Client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clientfidele',
  templateUrl: './clientfidele.component.html',
  styleUrls: ['./clientfidele.component.css'],
})
export class ClientfideleComponent implements OnInit {
  clients: any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  TableSizes: any = [5, 10, 15, 20];
  response:any;
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.Getclients();
      this.changeDetector.detectChanges();
    }, 1000);
  }

  Getclients() {
    this.clientservice.getClientsData().subscribe((res) => {
      this.clients = res;
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
  UpdateClient(client: ClientModel) {
    if (client.Montantfidilite > 500) {
      client.type = 'fidèle';
    } else {
      client.type = '';
    }
    this.clientservice.updateClient(client.id, client).subscribe((res) => {
      this.response=res;
      if (this.response.message == 'Client updated succefully') {
        Swal.fire({
          position: 'top-end',
          title: 'Client Modifié',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
      }
      else{
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne va pas',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
      this.Getclients();
    });
  }

  Deleteclient(id: any) {
    this.clientservice.deleteClient(id).subscribe((res) => {
      this.Getclients();
      Swal.fire({
        position: 'top-end',
        title: 'Client supprimé',
        text: '',
        showConfirmButton: false,
        timer: 1500,
        icon: 'success',
      });
    });
  }

  OnTableDataChange(event: any) {
    this.Page = event;
    this.Getclients();
  }

  OnTableSizechange(event: any) {
    this.TableSize = event.target.value;
    this.Page = 1;
    this.Getclients();
  }
}
