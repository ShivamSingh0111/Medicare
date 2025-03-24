import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { format } from 'date-fns';
import '../styles/appointment-list.css';

const AppointmentList = () => {
  const { appointments, doctors, deleteAppointment } = useAppointments();

  const getDoctorName = (doctorId) => {
    const doctor = doctors.find(d => d.id === doctorId);
    return doctor ? doctor.name : 'Unknown Doctor';
  };

  return (
    <div className="appointment-list">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              <div className="appointment-info">
                <h3>{getDoctorName(appointment.doctorId)}</h3>
                <p>Patient: {appointment.patientName}</p>
                <p>Date: {format(new Date(appointment.date), 'MMMM do, yyyy')}</p>
                <p>Time: {appointment.time}</p>
                <p>Reason: {appointment.reason}</p>
              </div>
              <button 
                onClick={() => deleteAppointment(appointment.id)}
                className="delete-btn"
              >
                Cancel Appointment
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;