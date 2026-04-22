const soluong=document.getElementsByClassName("sl");
const dongia=document.getElementsByClassName("dg");
const thanhtien=document.getElementsByClassName("tt");
for (let i=0;i<soluong.length;i++)
{
    thanhtien[i].innerHTML=soluong[i].innerHTML*dongia[i].innerHTML;
    tongthanhtoan += parenlnt(thanhtien[i].innerHTML);
}
document.getElementById("tongtien").innerHTML=tongthanhtoan;