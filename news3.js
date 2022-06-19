function getNewsss(value)
{
 
   document.getElementById("add").innerHTML="";
  // document.getElementById("tre").innerHTML="";
 
 
  let url=`https://newsapi.org/v2/everything?q=${value}&from=2022-06-14&sortBy=popularity&apiKey=421eeaaa78e04c60995bf23a30776bbf`
console.log(url)
   
    //fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5ade74b781ee4c488ef755fbdb037c58`)
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
            // newsImg.appendChild(img);
 
            // news details div
            let newsDetails=document.createElement("div");
            newsDetails.classList.add("news_details");
            newsImg.appendChild(img);
 
       
 
             let link=document.createElement("a");
             link.setAttribute("href",n.url);
             link.setAttribute("target","blank");
 
             let title=document.createElement("h4");
            title.classList.add("title");
            title.append(n.title);
 
 
           
             newsDetails.appendChild(link);
             link.appendChild(title);
 
            // addind news img and news details to card
 
             newsCard.appendChild(newsImg);
            newsCard.appendChild(newsDetails);
            //newsCard.appendChild(newsImg);
 
 
 
             document.getElementById("add").appendChild(newsCard);
           //  document.getElementById("news").appendChild(newsCard);
 
 
//            
 
      })
 
 
    })
    .catch((err)=>{
        console.log(err);
    })
 
 
}
getNewsss("bollywood")
 
