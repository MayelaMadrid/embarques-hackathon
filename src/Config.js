import firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyDScq-3FJtzAD7jleWVp7vkyXXf24O-Irg',
  authDomain: 'mytest-2cd8f.firebaseapp.com',
  databaseURL: 'https://mytest-2cd8f.firebaseio.com',
  projectId: 'mytest-2cd8f',
  storageBucket: 'mytest-2cd8f.appspot.com',
  messagingSenderId: '1059305526964'
};
export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
