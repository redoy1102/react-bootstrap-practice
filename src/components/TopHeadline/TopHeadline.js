import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-18&sortBy=publishedAt&apiKey=d3900ba57fb541ddb735538e12d7f238')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>News: {articles.length}</h1>
            {
                articles.map(article => <News article={article} ></News>)
            }
            {/* <li>{article.title}</li> */}
        </div>
    );
};

export default TopHeadline;