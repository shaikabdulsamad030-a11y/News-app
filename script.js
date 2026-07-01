let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", () => {
  let news_term = document.getElementById("news_term").value;
  let fetchNews = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${news_term}&apiKey=95520d62c8b1416890c3c10c346f4f1d`
    );
    let finalData = await data.json();
    let finalNews = finalData.articles;
    let news_container = document.getElementById("news_container");
    news_container.innerHTML=""
    finalNews.forEach((article) => {
      news_container.innerHTML += `
            <article class=card_container>
             <img src=${article.urlToImage} id=img alt=image>
             <h3 id=title>${article.title}</h3>
              <p id=description>${article.description}</p>
              <p id=date>${article.publishedAt}</p>
              <a href=${article.url} id=link target=_blank><button id=read_btn>Read Full Article</button></a>
            </article>
            `;
    });
  };
  fetchNews();
});
