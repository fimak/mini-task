import React from 'react';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Tab1.css';
import useUsers from '../hooks/useUsers';

const Tab1: React.FC = () => {
  const { users, loading, error } = useUsers();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {users && (
          <IonList>
            {users.map((user, index) => (
              <IonItem key={index}>
                <IonAvatar slot="start">
                  <img src={user.picture} alt={user.name} />
                </IonAvatar>
                <IonLabel>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
