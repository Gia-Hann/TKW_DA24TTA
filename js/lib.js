const productList = [
    { id:"001",name:"Hoa Oải Hương",price:250000,img:"../assets/images/.3jpg", info:"Hàng Nhập"},
    { id:"002",name:"Hoa Hồng",price:180000,img:"../assets/images/.4jpg", info:"Đà Lạt"},
    { id:"003",name:"Hoa Lan",price:500000,img:"../assets/images/.5jpg", info:"Loại 1"}
];
function addProduct(item)
{
    const myDiv=document.createElement("div");
    myDiv.setAttribute("class","prodcut-item");

    const myImage= document.createElement("div");
    myImage.setAttribute("class","product-image");
    const productImg=document.createElement("img");
    productImg.setAttribute("src","../assets/images/.jpg");
    productImg.setAttribute("alt","SẢN PHẨM HOA");
    myImage.appendChild(productImg);
    myDiv.appendChild(myImage);

    const myInfo=document.createElement("div");
    myInfo.setAttribute("class","product-info");

    const name =document.createElement("h3");
    const name=document.createTextNode("Tên sản phẩm");
    name.appendChild(nameText);

    const price = document.createElement("p");
    const priceText = document.createTextNode("Gía: 100.000");
    price.appendChild(priceText);

    const link = document.createElement("a")
    link.setAttribute("href","#");
    const linkText = document.createTextNode("Xem chi tiết");
    link.appendChild(linkText);

    myInfo.appendChild(name);
    myInfo.appendChild(price);
    myInfo.appendChild(link);

    myDiv.appendChild(myInfo);

    const container=document.getElementById("product-list");
    container.appendChild(myDiv);
}