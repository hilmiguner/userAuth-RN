import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFecthedMessage] = useState("");

  const authCtx = useContext(AuthContext);

  const authToken = authCtx.token;

  useEffect(() => {
    axios.get(`https://react-native-firebase-6caa6-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${authToken}`).then((response) => {
      setFecthedMessage(response.data);
    })
  }, [authToken]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
