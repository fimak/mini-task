import React, { useEffect, useState } from 'react';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Tab1.css';
import useUsers from '../hooks/useUsers';

const Tab1: React.FC = () => {
  const { users: initialUsers, loading, error } = useUsers();
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const handleRemoveUser = (index: number) => {
    if (users) {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {users && (
          <IonList>
            {users.map((user, index) => (
              <IonItemSliding key={index}>
                <IonItem>
                  <IonAvatar slot="start">
                    <img src={user.picture} alt={user.name} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => handleRemoveUser(index)}>
                    Remove
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
