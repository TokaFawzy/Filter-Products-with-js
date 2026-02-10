let allProducts = [];
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        displayProducts(allProducts);
    }
);
function displayProducts(data){
    let products=document.querySelector(".products");
    products.innerHTML="";
    for(let i of data){
        let card=document.createElement("div");
        card.setAttribute("class","card");
        let img=document.createElement("img");
        let h4=document.createElement("h4");
        let price=document.createElement("p");
        price.innerText=`Price: ${i.price} $`;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        h4.innerText=i.title;
        img.src=i.image;
        card.appendChild(img);
        card.appendChild(h4);
        card.appendChild(price);
        card.appendChild(btn);
        products.appendChild(card)
    }
}
function searchProducts(){
    let input=document.querySelector('.seach-input').value.toLowerCase();
    let filtered=allProducts.filter(e=>
        e.title.toLowerCase().includes(input)
    )
    displayProducts(filtered);
}
function showAll(){
    displayProducts(allProducts);
}
function filter(data){
    let filtered=allProducts.filter(d=>d.category==data);
    displayProducts(filtered);
}
function setActive(button){
    let btns=document.querySelectorAll(".btn-value");
    btns.forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}
