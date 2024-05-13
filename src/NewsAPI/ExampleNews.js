import React, { useState, useEffect } from 'react';

//require('dotenv').config()





function ExampleNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
//username
//database password
  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiKey = process.env.NODE_ENV.MY_API_KEY;
        console.log(apiKey);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {/* {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p><a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default ExampleNews;
