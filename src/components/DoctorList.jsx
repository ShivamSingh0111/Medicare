import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import '../styles/doctor-list.css';

const DoctorList = () => {
  const { doctors } = useAppointments();

  return (
    <div className="doctor-list">
      <h2>Our Doctors</h2>
      <div className="doctors-grid">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;