const productList = [
    { id:"1",name:"Hoa Oải Hương",price:250000,img:"../assets/images/.3jpg"},
    { id:"2",name:"Hoa Hồng",price:180000,img:"../assets/images/.4jpg" },
    { id:"3",name:"Hoa Lan",price:500000,img:"../assets/images/.5jpg"},
];
function addProduct_v2(product)
{
     //Tạo khung chứa cha - Thông tin 1 sản phẩm
    const myDiv=document.createElement("div");
    myDiv.setAttribute("class","prodcut-item col-sm-3");
    
    //Tạo khung chứa số 1 - Hình ảnh sản phẩm
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class","product-image");

    //Tạo node Hình ảnh
    const productImg=document.createElement("img");
    productImg.setAttribute("src",imgSrc);
    productImg.setAttribute("alt",product.name);
    productImg.style.width="100%";
   productImg.style.height="250px";

   //Gán hình vào khung chứa 1
   myDiv1.appendChild(productImg);

   //Tạo khung chứa số 2-Thông tin sản phẩm
   const myDiv2 = document.createElement("div");
   myDiv2.setAttribute("class","product-info")

   //Tạo node paragraph1 - Tên sản phẩm
    const productName = document.createElement("p");
    const prodcutNameText = document.createTextNode("product.name");
    productName.appendChild(prodcutNameText);
    myDiv2.appendChild(productName);

    //Tạo node paragraph2 - Gía sản phẩm
    const productPrice = document.createElement("p");
    const productpriceText = document.createTextNode(price);
    productPrice.appendChild(productpriceText);
    myDiv2.appendChild(productLink);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    //Thêm khung chứa cha vào body
    document.getElementById("product-List").appendChild(myDiv);
}

    