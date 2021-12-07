// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiHiJftR3SsmUC6xejsU3mMo7yLce8Z-M",
    authDomain: "auth-d6469.firebaseapp.com",
    projectId: "auth-d6469",
    storageBucket: "auth-d6469.appspot.com",
    messagingSenderId: "610199334681",
    appId: "1:610199334681:web:d39a14a0ebd6371963df88"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();



// js for homepage starts
let arr = [
    dryer = {
        name: "hair-dryer",
        image: "https://cdn-image.realsimple.com/sites/default/files/remington-hair-dryer.jpg",
        price: 2000
    },

    shoe = {
        name: "shoes",
        image: "https://i.ebayimg.com/images/g/XPAAAOSwPqFdWj17/s-l640.jpg",
        price: 4000
    },

    cream = {
        name: "cream",
        image: "https://th.bing.com/th/id/OIP.oIx6gMylXC3sTZahFCOnsQHaHa?pid=ImgDet&rs=1",
        price: 500
    },

    straightner = {
        name: "straightener",
        image: "https://tophairstraightener.com/wp-content/uploads/2018/03/Huachi-Hair-Straightener-Flat-Iron-with-Ionic-Ceramic-Titanium-Straighteners.jpg",
        price: 1600
    },
    dryer = {
        name: "hair-dryer",
        image: "https://cdn-image.realsimple.com/sites/default/files/remington-hair-dryer.jpg",
        price: 2000
    },

    shoe = {
        name: "shoes",
        image: "https://i.ebayimg.com/images/g/XPAAAOSwPqFdWj17/s-l640.jpg",
        price: 4000
    },

    cream = {
        name: "cream",
        image: "https://th.bing.com/th/id/OIP.oIx6gMylXC3sTZahFCOnsQHaHa?pid=ImgDet&rs=1",
        price: 500
    },

    straightner = {
        name: "straightener",
        image: "https://tophairstraightener.com/wp-content/uploads/2018/03/Huachi-Hair-Straightener-Flat-Iron-with-Ionic-Ceramic-Titanium-Straighteners.jpg",
        price: 1600
    }
]
function generateItems() {
    arr.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("product", "keys");
        doc.innerHTML = `
                <div class="data_preview_frame">
                    <div class="data_preview_content">
                        <a onclick="imageclick(event)"  href="../product page/prouctpage.html">
                            <img src=${item.image} name=${item.name} amount=${item.price} class="images" alt="">
                        </a>
                    </div>
                </div>
                `
        // console.log(doc);
        document.querySelector(".data_preview_area").appendChild(doc);

    })
}
function imageclick(e) {
    console.log(e);
    console.log(e.target.src);
    console.log(e.target.name);
    console.log(e.target.attributes.amount.nodeValue);
    let b = document.querySelector(".img1");
    localStorage.setItem("head", e.target.name)
    localStorage.setItem("price", e.target.attributes.amount.nodeValue);
    localStorage.setItem("image", e.target.src);
    console.log(b);
    return true
}
// js for homepage ends





//js for signup and signin page starts


//signup function
async function signUp() {
    let email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = await auth.createUserWithEmailAndPassword(email.value, password.value);
    console.log(promise)
    db.collection("users").add({
        "email": email.value,
        "cart": [],
        "wishlist": [],
        "orders": []
    }).then((response) => {
        console.log(response)
        localStorage.setItem("id", response.id)
    })
    // promise.catch(e => alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}

//signOut
function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);

    } else {
        alert("No Active user Found")
    }
})
//js for signup and signin page ends





//js for cart page starts
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

function getItems() {
    db.collection("users").doc("SNTNQo26Di6rwA2TaZvY").get().then((querySnapshot) => {
        console.log(querySnapshot.data())
        querySnapshot.data().cart.forEach((item) => {
            let doc = document.createElement("div");

            doc.innerHTML = `
            <div class="innerContent" > 
                <div class="imgDiv">
                    <img src=${item.image} alt="Hair Straightner">
                </div>
                <div class="contentDiv">
                    <div class="name">${item.name}</div>
                    <div class="stock">In Stock</div>
                    <div class="shipping">Eligible for free shipping</div>
                    <div class="quantity">
                        <select name="button" id="">
                            <option>Qty : 1</option>
                        </select>
                    </div>
                </div>
                <div class="itemPrice">${item.price}</div>
            </div>
            `
            document.querySelector(".box2").appendChild(doc);
        })
    });
}
getItems()

function getTotalCost(items) {
    let totalCost = 0;
    items.forEach((item) => {
        totalCost = (item.price * 1);
    })
    document.querySelector(".total-cost-number").innerText = numeral(totalCost).format('0,0.00');

    let doc = document.createElement("div");

    doc.innerHTML = ` 
        <div class="subtotal">Subtotal(1 item): </div>
        <div class="subtotal2"> ${item.subtotal}</div>
        `
    document.querySelector(".box3").appendChild(doc);
}
//js for cart page ends