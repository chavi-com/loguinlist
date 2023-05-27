import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsModalComponent } from '../../shared/modals/user-details-modal/user-details-modal.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  selectedUser: any; // Variable de control para el usuario seleccionado

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<any[]>('http://localhost:9000/api/users')
      .subscribe(
        response => {
          this.users = response;
        },
        error => {
          console.log('Error al obtener usuarios:', error);
        }
      );
  }

  openDetails(user: any) {
    this.selectedUser = user; // Asignar el usuario seleccionado a la variable de control
  }
}
