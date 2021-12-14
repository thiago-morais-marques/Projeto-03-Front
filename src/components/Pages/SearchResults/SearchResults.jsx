import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardPost from '../../Misc/CardPost';
import Header from '../../Misc/Header';

const SearchResults = () => {
  const [posts, setPosts] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div>
      <Header
        posts={posts}
        setPosts={setPosts}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        logo="Iron Blogger"
        className="logo"
      />
      {!posts
        ? (
          <div>
            <h3>Nenhum post encontrado!</h3>
            <Link to="/">
              Retornar
            </Link>
          </div>
        )
        : posts.map((post) => (
          <CardPost key={post._id} post={post} decodedImage={`data:image/png;base64,${post.imageURL}`} />
        ))}
    </div>
  );
};

export default SearchResults;
