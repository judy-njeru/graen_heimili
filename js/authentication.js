
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCq230hArWBikQ5VF7rSii0qX3xW7cAx20",
  authDomain: "graent-heimili.firebaseapp.com",
  databaseURL: "https://graent-heimili.firebaseio.com",
  projectId: "graent-heimili",
  storageBucket: "graent-heimili.appspot.com",
  messagingSenderId: "533761094837"
};
firebase.initializeApp(config);


let isLoggedIn = false;

//Facebook login
document.getElementById("facebook-connect").addEventListener("click", facebookAuth);

function facebookAuth() {

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      isLoggedIn = true;
      // window.location = "https://localhost:8000/home_types.html";
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

// Google login
document.getElementById("google-connect").addEventListener("click", googleAuth);
function googleAuth() {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      isLoggedIn = true;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}



// Twitter login
document.getElementById("twitter-connect").addEventListener("click", twitterAuth);

function twitterAuth() {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        window.open("https://127.0.0.1:8000/home_types.html","type_of_home")
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}


// firebase.auth().onAuthStateChanged(user=>{
//  let uid = null;
//   if(user){
//     uid = user.uid;
//     console.log('login')
//     window.open("http://localhost:8000/home_types.html","type_of_home")
//
//     // document.getElementById("btnLogOut").classList.remove('hide')
//   } else{
//     // document.getElementById("btnLogOut").classList.add('hide')
//     window.location.replace('http://localhost:8000/login.html');
//   }
// })
