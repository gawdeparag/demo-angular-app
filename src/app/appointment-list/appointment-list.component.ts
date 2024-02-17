import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  newAppointmentTitle: string = "";
  newAppointmentDescription: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.length > 0 || this.newAppointmentDescription.length > 0 || !this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.newAppointmentTitle,
        description: this.newAppointmentDescription,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDescription = "";
      this.newAppointmentDate = new Date();
    } else {
      alert("Please fill in all fields");
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
