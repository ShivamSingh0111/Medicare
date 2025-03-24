import React, { useState, useContext } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { format } from 'date-fns';
import '../styles/modal.css';

const AppointmentModal = ({ date, onClose }) => {
  const { addAppointment, doctors } = useAppointments();
  const [formData, setFormData] = useState({
    doctorId: doctors[0]?.id || '',
    patientName: '',
    time: '10:00',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      ...formData,
      date: date.toISOString()
    };
    addAppointment(newAppointment);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Book Appointment for {format(date, 'MMMM do, yyyy')}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Doctor</label>
            <select 
              name="doctorId" 
              value={formData.doctorId}
              onChange={handleChange}
              required
            >
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} ({doctor.specialty})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Book Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;