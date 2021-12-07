// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiHiJftR3SsmUC6xejsU3mMo7yLce8Z-M",
  authDomain: "auth-d6469.firebaseapp.com",
  projectId: "auth-d6469",
  storageBucket: "auth-d6469.appspot.com",
  messagingSenderId: "610199334681",
  appId: "1:610199334681:web:d39a14a0ebd6371963df88"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();
const db = firebase.firestore();

  //signup function
  async function signUp(){
    let email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = await auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    console.log(promise)
    db.collection("users").add({
      "email": email.value,
      "cart" : [],
      "wishlist":[],
      "orders" : []
    }).then((response)=>{
      console.log(response)


      localStorage.setItem("id", response.id)
    })
    promise.catch(e=>alert(e.message));

    alert("SignUp Successfully");
  }



  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })