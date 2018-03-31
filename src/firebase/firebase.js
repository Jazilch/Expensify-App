import * as firebase from 'firebase';
import keys from '../config/prod';

console.log(keys.apiKey)

const config = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };