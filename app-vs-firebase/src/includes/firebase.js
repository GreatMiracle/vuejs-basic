// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAMGmqZuKdewTmZrilQwoyFm1YJ7-MAc-w",
    authDomain: "vue1st.firebaseapp.com",
    projectId: "vue1st",
    storageBucket: "vue1st.appspot.com",
    messagingSenderId: "1020636982664",
    appId: "1:1020636982664:web:26537dced61c806f7e9e3d",
    measurementId: "G-Y2RZMLJ79G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestoreInstance = getFirestore(app);

async function getCities() {
    const querySnapshot = await getDocs(
        collection(firestoreInstance, 'transaction')
    );

    console.log("querySnapshot", querySnapshot);

    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.id);
        console.dir(doc.data());
    });
}
export {
    analytics,
    firestoreInstance,
    getCities
};
