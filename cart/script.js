const firebaseConfig = {
    apiKey: "AIzaSyBiHiJftR3SsmUC6xejsU3mMo7yLce8Z-M",
    authDomain: "auth-d6469.firebaseapp.com",
    projectId: "auth-d6469",
    storageBucket: "auth-d6469.appspot.com",
    messagingSenderId: "610199334681",
    appId: "1:610199334681:web:d39a14a0ebd6371963df88"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function getItems() {

    db.collection("users").doc("SNTNQo26Di6rwA2TaZvY").get().then((querySnapshot) => {
        console.log(querySnapshot.data())
        querySnapshot.data().cart.forEach((item) => {

            let doc = document.createElement("div");

            doc.innerHTML = `<div class="innerContent" > 
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
    <div class="innerContent">`


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

    doc.innerHTML = ` <div class="subtotal">Subtotal(1 item): </div>
    <div class="subtotal2"> ${item.subtotal}</div>`

    document.querySelector(".box3").appendChild(doc);
        }




















