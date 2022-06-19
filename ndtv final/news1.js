

function getNews(value)
{

   document.getElementById("news").innerHTML="";

  



let url=`https://newsapi.org/v2/everything?q=${value}&from=2022-06-14&sortBy=popularity&apiKey=421eeaaa78e04c60995bf23a30776bbf`
// console.log(url)
    
  
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

            let link=document.createElement("a");
            link.setAttribute("href",n.url);
            link.setAttribute("target","blank");


            let img=document.createElement("img");
            img.setAttribute("src",n.urlToImage);
            img.setAttribute("href",n.url);


            // adding img in news img div 
            newsImg.appendChild(img);

            // news details div 
            let newsDetails=document.createElement("div");
            newsDetails.classList.add("news_details");

            // title h1 


            let title=document.createElement("h2");
            title.classList.add("title");
            title.append(n.title);

            // author p 
            let author=document.createElement("p");
            author.classList.add("author");
            author.append(n.author);

            // content p 
            let content=document.createElement("p");
            content.classList.add("content");
            content.append(n.description);

          

            // button read 
            let button=document.createElement("button");
            button.classList.add("btn");
            button.append("Read Full Article")

            // adding button in link 
            link.appendChild(img);

            // adding content in news details 
            newsDetails.appendChild(title);
            newsDetails.appendChild(author);
            newsDetails.appendChild(content);
           // newsDetails.appendChild(link);

            // addind news img and news details to card 

            newsCard.appendChild(link);
            newsCard.appendChild(newsDetails);


             document.getElementById("news").appendChild(newsCard);
          




      })


    })
    .catch((err)=>{
        console.log(err);
    })


}

getNews("latest");