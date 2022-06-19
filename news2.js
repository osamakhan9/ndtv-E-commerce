 
function getNewss(value)
{
 
   document.getElementById("tre").innerHTML="";
 
 
 
   let url=`https://newsapi.org/v2/everything?q=${value}&from=2022-06-14&sortBy=popularity&apiKey=421eeaaa78e04c60995bf23a30776bbf`
console.log(url)
   
   
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        let news=data.articles;
       
        console.log(news);
   
        news.forEach((n,index)=>{
 
            // news card div
            let newsCard=document.createElement("div");
            newsCard.classList.add("news_card");
 
            // news img div
            let newsImg=document.createElement("div");
            newsImg.classList.add("news_img")
 
            // article img
            let img=document.createElement("img");
            img.setAttribute("src",n.urlToImage);
            img.setAttribute("href",n.url);
 
 
            // adding img in news img div
            newsImg.appendChild(img);
 
            // news details div
            let newsDetails=document.createElement("div");
            newsDetails.classList.add("news_details");
 
            // title h1
 
 
 
             let link=document.createElement("a");
             link.setAttribute("href",n.url);
             link.setAttribute("target","blank");
 
             let title=document.createElement("h4");
            title.classList.add("title");
            title.append(n.title);
 
 
 
 
            // adding button in link
            link.appendChild(title);
 
           
             newsDetails.appendChild(link);
 
            // addind news img and news details to card
 
            newsCard.appendChild(newsImg);
            newsCard.appendChild(newsDetails);
 
 
             document.getElementById("tre").appendChild(newsCard);
         
 
 
 
      })
 
 
    })
    .catch((err)=>{
        console.log(err);
    })
 
 
}
getNewss("trending")
