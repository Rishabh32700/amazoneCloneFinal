let arr = [
    dryer= {
        name: "hair-dryer",
        image: "https://cdn-image.realsimple.com/sites/default/files/remington-hair-dryer.jpg",
        price: 2000

    },

shoe={
    name: "shoes",
    image: "https://i.ebayimg.com/images/g/XPAAAOSwPqFdWj17/s-l640.jpg",
    price: 4000
},

cream={
    name: "cream",
    image: "https://th.bing.com/th/id/OIP.oIx6gMylXC3sTZahFCOnsQHaHa?pid=ImgDet&rs=1",
    price: 500
},

straightner={
    name: "straightener",
    image: "https://tophairstraightener.com/wp-content/uploads/2018/03/Huachi-Hair-Straightener-Flat-Iron-with-Ionic-Ceramic-Titanium-Straighteners.jpg",
    price: 1600
},
    dryer= {
        name: "hair-dryer",
        image: "https://cdn-image.realsimple.com/sites/default/files/remington-hair-dryer.jpg",
        price: 2000

    },

shoe={
    name: "shoes",
    image: "https://i.ebayimg.com/images/g/XPAAAOSwPqFdWj17/s-l640.jpg",
    price: 4000
},

cream={
    name: "cream",
    image: "https://th.bing.com/th/id/OIP.oIx6gMylXC3sTZahFCOnsQHaHa?pid=ImgDet&rs=1",
    price: 500
},

straightner={
    name: "straightener",
    image: "https://tophairstraightener.com/wp-content/uploads/2018/03/Huachi-Hair-Straightener-Flat-Iron-with-Ionic-Ceramic-Titanium-Straighteners.jpg",
    price: 1600
}

   

]
function generateItems() {
    // let itemsHTML = "";
    arr.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("product", "keys");
        doc.innerHTML = `
        
                <div class="data_preview_frame">
                    <div class="data_preview_content">
                        <a onclick="imageclick(event)"  href="/amazon clone rishabh/prouctpage.html">
                            <img src=${item.image} name=${item.name} amount=${item.price} class="images" alt="">
                        </a>
                    </div>
                </div>
            
        `
        console.log(doc);



        document.querySelector(".data_preview_area").appendChild(doc);

    })
}

// let a = document.querySelector(".uniqueclass");
// a.addEventListener("click")

 function imageclick(e){
     console.log(e);
     console.log(e.target.src);
     console.log(e.target.name);
     console.log(e.target.attributes.amount.nodeValue);
    let b = document.querySelector(".img1");
    localStorage.setItem("head", e.target.name)
    localStorage.setItem("price", e.target.attributes.amount.nodeValue );
    localStorage.setItem("image", e.target.src);
    console.log(b);
    return true
}

// console.log(imageclick());
        // let addToCartEl = document.createElement("div");
        // addToCartEl.classList.add("hover:bg-yellow-600", "cursor-pointer", "product-add", "h-8", "w-28", "rounded", "bg-yellow-500", "text-white", "text-md", "flex", "justify-center", "items-center");
        // addToCartEl.innerText = "Add to cart";
        // addToCartEl.addEventListener("click", function(){
        //     addToCart(item)
        // })
        // doc.appendChild(addToCartEl);
        // document.querySelector(".preview_control_area").appendChild(doc);
//     })
// }

generateItems();