import { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { Button } from "antd";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      console.log("handleOnline");
      setIsOnline(true);
    }
    function handleOffline() {
      console.log("handleOffline");
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
const Tab1: React.FC = () => {
  const isOnline = useOnlineStatus();
  console.log("isOnline", isOnline);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Tab 1 page' />
        <Button>antd Button</Button>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
