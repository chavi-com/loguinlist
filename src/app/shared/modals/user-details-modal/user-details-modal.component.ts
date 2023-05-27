import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Detalles del usuario</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <!-- Mostrar los detalles del usuario aquí -->
      <p>{{ user?.name }}</p>
      <p>{{ user?.lastname }}</p>
      <p>{{ user?.phone }}</p>
      <p>{{ user?.email }}</p>
      <!-- Otros detalles del usuario -->
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Volver</button>
    </div>
  `,
  styleUrls: ['./user-details-modal.component.css']
})

export class UserDetailsModalComponent implements OnInit {
  @Input() userId?: string;
  user: any;

  constructor(public modal: NgbActiveModal, private http: HttpClient) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    if (this.userId) {
      this.http.get<any>('http://localhost:9000/api/users/' + this.userId)
        .subscribe(
          response => {
            this.user = response;
          },
          error => {
            console.log('Error al obtener los detalles del usuario:', error);
          }
        );
    }
  }
}
