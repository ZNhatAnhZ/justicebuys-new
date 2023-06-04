const referenceLinks = [
    {
        "title": "Shop All Amazon Products",
        "description": "Click Open in browser to open in app",
        "image": "https://uploads-ssl.webflow.com/6438e33d3d4e697cb6cf555d/643ed90241d741a9a0f22e19_amazon-logo.jpeg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
   
]

const products = [
    {
        "title": "Inkless Printer",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/61bD00Xle5L._AC_SL1500_.jpg",
        "link": "https://a.co/d/2bttCkj"
    },
    {
        "title": "Paper Towel Dispenser",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/51LwQIYeYpL._AC_SL1500_.jpg",
        "link": "https://a.co/d/0O0SFtx"
    },
    {
        "title": "Mop Slippers",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/71U2R-2V+bL._SL1001_.jpg",
        "link": "https://a.co/d/bMaKZei"
    },
    {
        "title": "Portable Washing Machine",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/515QdqehrkL._AC_SL1500_.jpg",
        "link": "https://a.co/d/8jpRIU8"
    },
    {
        "title": "Banana Filler",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/81GFFLiZOCL._AC_SL1500_.jpg",
        "link": "https://a.co/d/eYTApBa"
    },
    {
        "title": "Spinning Whisk",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/61t-bMNX3SL._AC_SL1500_.jpg",
        "link": "https://a.co/d/j26Mcy5"
    },
    {
        "title": "product",
        "description": "asdsada",
        "image": "https://uploads-ssl.webflow.com/643edc23fc52d06b2544e0f7/6467a6af24953ff292720c6a_bedsure-bed-1.jpg",
        "link": "https://www.amazon.com/shop/justicethetutor"
    },
    {
        "title": "Folding Board",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/61h9Gzj+3nL._AC_SL1194_.jpg",
        "link": "https://a.co/d/dyiHoJL"
    },
    {
        "title": "Beverage Barricade",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/81BLDL0XxNL._AC_SL1500_.jpg",
        "link": "https://a.co/d/cAbvDdq"
    },
    {
        "title": "Reusable Lint Roller",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/51M5kH29axL._AC_SL1500_.jpg",
        "link": "https://a.co/d/5EXenaH"
    },
    {
        "title": "Egg Cracker",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/41vEPMx+h9L._AC_SL1500_.jpg",
        "link": "https://a.co/d/cMJni9v"
    },
    {
        "title": "Bedsure Dog Bed",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/81-8H5-UPRL._AC_SL1500_.jpg",
        "link": "https://a.co/d/fhql95y"
    },
    {
        "title": "Vacuum Groomer",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/61x6eI1AZeL._AC_SL1500_.jpg",
        "link": "https://a.co/d/cTpu3sr"
    },
    {
        "title": "Bedsure Dog Bed",
        "description": "asdsada",
        "image": "https://m.media-amazon.com/images/I/71uqWPZVzfL._AC_SL1500_.jpg",
        "link": "https://a.co/d/fmViAR0"
    },
]

function loadReferenceLink(inputReferenceLinks) {
    const holder = document.getElementById("referenceLinkHolder");
    inputReferenceLinks.forEach((e) => {
        let anchorTag = document.createElement("a");
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");

        div1.className = "row gx-2 h-25 reference-cover mb-2";
        div2.className = "col-9";
        div3.className = "text-left";
        div4.className = "text-left small text-muted";
        img.className = "col-1 referenceLinkImage";

        div3.innerText = e.title;
        div4.innerText = e.description;
        anchorTag.href = e.link;
        img.src = e.image;

        div2.appendChild(div3);
        div2.appendChild(div4);
        div1.appendChild(img);
        div1.appendChild(div2);
        anchorTag.appendChild(div1);
        holder.appendChild(anchorTag);
    })
}

function loadProducts(inputProducts) {
    const holder = document.getElementById("productsHolder");
    inputProducts.forEach((e) => {
        let anchorTag = document.createElement("a");
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let h6 = document.createElement("h6");

        div1.className = "col-4 col-xl-3 mb-2 product-card text-center";
        div2.className = "list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm";
        div3.className = "p-1 position-relative";
        div4.className = "list-card-body";
        anchorTag.className = "text-decoration-none";
        img.className = "img-fluid item-img";
        h6.className = "mb-1 text-black";

        h6.innerText = e.title;
        img.src = e.image;
        anchorTag.href = e.link;

        div4.appendChild(h6);
        div3.appendChild(div4);
        anchorTag.appendChild(img);
        anchorTag.appendChild(div3);
        div2.appendChild(anchorTag);
        div1.appendChild(div2);
        holder.appendChild(div1);

    });
}

function searchProduct(inputTitleProduct) {
    const arrayOfHTMLProducts = document.getElementsByClassName("product-card");

    Array.from(arrayOfHTMLProducts).reverse().forEach((e) => {
        if (e.children[0].children[0].children[1].children[0].children[0].innerText.search(inputTitleProduct) === -1) {
            e.classList.remove('show');
            e.classList.add('hide');
        } else {
            e.classList.remove('hide');
            e.classList.add('show');
        }
    })
}

window.onload = () => {
    loadReferenceLink(referenceLinks);
    loadProducts(products);

    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", (e) => {
        searchProduct(searchBar.value);
    });
};