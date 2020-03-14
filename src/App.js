import React, { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

const App = () => {
  const APP_KEY = "69ce0bbd1bb6492aa14d3d96d4796ef9";
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("us");
  useEffect(() => {
    getNews();
  }, [query]);
  const getNews = async () => {
    const response = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${query}&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setNews(data);
    console.log(data);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const onSubmitSearch = e => {
    e.preventDefault();
    setQuery(search);
    setQuery("");
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitSearch} className="searchForm">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <div className="newsDaily">
        {news.map(articles => (
          <News
            title={articles.source.title}
            publish={articles.source.publishAt}
            image={articles.source.urlToImage}
            discription={articles.source.discription}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
