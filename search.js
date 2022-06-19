 
 function search(e)
 {
 
let value=document.getElementById("value").value;
 
 
 
 
   getNews(value);
   
 
 
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
let categories = document.getElementById("logo").children;
 
for (let el of categories) {
  el.addEventListener("click", hello);
}
 
function hello() {
    console.log(this.id)
    getNews(this.id);
//     getNews("latest");
 getNewss("trending")
 getNewsss("bollywood")
}
 
 
let categorie = document.getElementById("upper").children;
 
for (let el of categorie) {
  el.addEventListener("click", hell);
}
 
function hell() {
    console.log(this.id)
    getNews(this.id);
//     getNews("latest");
getNewss("trending")
 getNewsss("bollywood")
 
 
}
