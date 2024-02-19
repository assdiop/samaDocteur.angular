import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

    showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message,
      timer: 3000, // Durée en millisecondes avant la disparition
        timerProgressBar: true,
    });
  }
}

