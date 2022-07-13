//variables

const techbtn = document.getElementById("technews");
const sciencebtn = document.getElementById("sciencenews");
const businessbtn = document.getElementById("businessnews");
const searchbtn = document.getElementById("technews");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

window.onload = function () {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();
};

//Array
var newsDataArr = [];

//apis

const API_key = "65e5def48a0c4818a06f404092d4a78f";
const Headline_News = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const Tech_News =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";

const Science_News =
  "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=";

const Business_News =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";

const Search_News = "https://newsapi.org/v2/everything?q=";

techbtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology</h4>";
  fetchTechNews();
});
sciencebtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Science</h4>";
  fetchScienceNews();
});
businessbtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business</h4>";
  fetchBusinessNews();
});
searchbtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>search: " + newsQuery.value + "</h4>";
  fetchQueryNews();
});

const fetchHeadlines = async () => {
  const response = await fetch(Headline_News + API_key);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchTechNews = async () => {
  const response = await fetch(Tech_News + API_key);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchScienceNews = async () => {
  const response = await fetch(Science_News + API_key);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(Business_News + API_key);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) return;

  const response = await fetch(
    Search_News + encodeURIComponent(newsQuery.value) + "&apikey=" + API_key
  );
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

function displayNews() {
  newsdetails.innerHTML = "";
  if (newsDataArr.length == 0) {
    newsdetails.innerHTML = "<h5>No Data found..</h5>";
    return;
  }

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");
    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparnt");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var description = document.createElement("p");
    description.className = "text-muted";
    description.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}
