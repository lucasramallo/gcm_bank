'use client';

import { useEffect, useState } from 'react';
import { simulateFetchNotifications } from '../lib/api';

export default function Notifications() {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      console.log('Simulando fetch de notificações');
      const response = await simulateFetchNotifications();
      setNotifications(response);
      console.log('Resposta da API simulada:', response);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Notificações</h1>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif}</li>
        ))}
      </ul>
    </div>
  );
}