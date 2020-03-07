import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
} from '@ionic/react'
import React from 'react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'
import { useQuery } from '@apollo/react-hooks'
import { LAUNCHES_PAST_QUERY } from '../graphql/lauches'

const Home: React.FC = () => {
  const { data, loading } = useQuery(LAUNCHES_PAST_QUERY)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.launchesPast.map((launch: any) => (
            <IonItem key={launch.id}>
              {launch.mission_name} | {launch.rocket.rocker_name}
            </IonItem>
          ))
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
