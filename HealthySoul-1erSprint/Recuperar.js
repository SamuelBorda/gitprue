firebase.initializeApp({
    apiKey: "AIzaSyDPKylT8Mizp2qRkeHVdzdmDAdRC4vyagQ",
    authDomain: "healthy-soul-db.firebaseapp.com",
    projectId: "healthy-soul-db",
    storageBucket: "healthy-soul-db.appspot.com",
    messagingSenderId: "368826998840",
    appId: "1:368826998840:web:d97a765e96b27dfeb106cd",
});

var recoverPass = function(){
 
    var emailAddress=document.querySelector(".inputC").value;
    console.log(emailAddress);
    firebase.auth().sendPasswordResetEmail(emailAddress).then(function(){
        alert('Se ha enviado un correo a su cuenta.Por favor sigue los pasos indicados.');
    },function(){
        console.log(error)
    })
    
}