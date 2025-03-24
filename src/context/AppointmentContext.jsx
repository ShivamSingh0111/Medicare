import React, { createContext, useState, useContext } from 'react';
import { addDays, format, isSameDay } from 'date-fns';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      doctorId: '101',
      patientName: 'John Doe',
      date: addDays(new Date(), 1),
      time: '10:00 AM',
      reason: 'Regular Checkup',
    }
  ]);

  const [doctors] = useState([
    { id: '101', name: 'Dr. Sarah Smith', specialty: 'Cardiology' },
    { id: '102', name: 'Dr. Michael Johnson', specialty: 'Neurology' },
  ]);

  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now().toString(),
    };
    setAppointments([...appointments, newAppointment]);
    return newAppointment;
  };

  const editAppointment = (id, updatedAppointment) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, ...updatedAppointment } : app
    ));
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const getAppointmentsByDate = (date) => {
    return appointments.filter(app => isSameDay(new Date(app.date), date));
  };

  const getDoctorById = (id) => {
    return doctors.find(doctor => doctor.id === id);
  };

  return (
    <AppointmentContext.Provider 
      value={{ 
        appointments,
        doctors,
        addAppointment,
        editAppointment,
        deleteAppointment,
        getAppointmentsByDate,
        getDoctorById
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);