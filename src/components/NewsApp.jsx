import React, { useEffect, useState } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState(null);

  // Api Key from News Api
  const Api_key = "a36efb2011fa4d02bdd014daea9ef72e";
  const handleApiCall = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_key}`
      );
      if (!response.ok) {
        throw new Error(`Http error status ${response.status}`);
      }
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  //To show Data when nothing searched
  useEffect(() => {
    handleApiCall();
  }, []);
  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };
  const handleInput = (event) => {
    setSearch(event.target.value);
    handleApiCall();
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>News App</h1>
        </div>
        <ul>
          <li>All</li>
          <li>News</li>
          <li>Business</li>
          <li>Entertainment</li>
          <li>Health</li>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Please Search"
            onChange={handleSearchInput}
            value={search}
          />
          <button onClick={handleApiCall}>Search</button>
        </div>
      </nav>
      <div className="title">
        <p>Stay Updated with News</p>
      </div>
      <div className="categoryBtn">
        <button onClick={handleInput} value="Sports">
          Sports
        </button>
        <button onClick={handleInput} value="Politics">
          Politics
        </button>
        <button onClick={handleInput} value="Health">
          Health
        </button>
        <button onClick={handleInput} value="Entertainment">
          Entertainment
        </button>
        <button onClick={handleInput} value="Technology">
          Technology
        </button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default NewsApp;
