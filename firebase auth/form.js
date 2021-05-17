var firebaseConfig = {
    apiKey: "AIzaSyD4NAdOJ--RtbibGGaF8UTm6uUhQli8wSE",
    authDomain: "form-81a25.firebaseapp.com",
    projectId: "form-81a25",
    storageBucket: "form-81a25.appspot.com",
    messagingSenderId: "247594860189",
    appId: "1:247594860189:web:0ebaa725f73606989ade74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message))

    alert("Signed Up")
}

function signIn() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message))
    let name = email.value
    alert("Signed In " + name)
}

function signOut() {
    auth.signOut();
    alert("Signed out")
}

auth.onAuthStateChanged(function(user) {

    if (user) {
        var email = email.name;
        alert("active.user " + email)
    } else {
        alert("no active user signed in")
    }
})