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
  displayedUsers: any[] = []; // Usuarios mostrados en la tabla
  currentPage: number = 1; // Página actual
  pageSize: number = 7; // Tamaño de página
  totalPages: number = 1; // Total de páginas

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<any[]>('http://localhost:3000/api/users')
      .subscribe(
        response => {
          this.users = response;
          this.updateDisplayedUsers(); // Actualizar los usuarios mostrados al obtener la lista completa
        },
        error => {
          console.log('Error al obtener usuarios:', error);
        }
      );
  }

  updateDisplayedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedUsers = this.users.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.users.length / this.pageSize);
  }

  openDetails(user: any) {
    this.selectedUser = user; // Asignar el usuario seleccionado a la variable de control
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedUsers();
    }
  }
}
