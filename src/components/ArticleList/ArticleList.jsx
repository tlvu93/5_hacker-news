import {useEffect, useState} from 'react';
import HnApi from '../../services/HackerNewsApi';
import PropTypes from 'prop-types';

const ArticleCard = ({data}) => {
  const shortenNum = (num) => {
    const result = (data.points / 1000).toFixed(1) + 'k';
    return result;
  };

  const getDateByElapsedTime = (seconds) => {
    let elapsedTime = (new Date() - seconds * 1000) / 1000; // in seconds

    if (elapsedTime > 60) elapsedTime /= 60; // convert to minutes
    else return `${elapsedTime.toFixed(0)} seconds ago`;
    if (elapsedTime > 60) elapsedTime /= 60; // convert to hours
    else return `${elapsedTime.toFixed(0)} minutes ago`;
    if (elapsedTime > 24) elapsedTime /= 24; // convert to days
    else return `${elapsedTime.toFixed(0)} hours ago`;

    return `${elapsedTime.toFixed(0)} days ago`;
  };

  return (
    <div className="pl-10 relative border border-gray-300 rounded-md bg-gray-100">
      <div className="flex flex-col absolute left-0 ml-1.5">
        {/* Upvote */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        {/* Points */}
        <p className="text-sm">
          {data.points < 1000 ? data.points : shortenNum(data.points)}
        </p>
        {/* Downvote */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <a href={data.url}>
        <div className="bg-white p-2">
          {/* Article Info */}
          <div>
            <p className="text-xs">
              Posted by {data.author} {getDateByElapsedTime(data.created_at_i)}
            </p>
          </div>
          <p className="font-bold">{data.title}</p>
          <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <div className="flex gap-2">
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                {data.num_comments}
              </button>
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                share
              </button>
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                save
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

ArticleCard.propTypes = {
  data: PropTypes.object,
};

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    HnApi.getPopularArticles()
      .then((response) => response.json())
      .then((data) => setArticles(data.hits));
  }, []);

  return (
    // Container
    <div>
      {/* Article List */}
      <div className={'py-5 px-6'}>
        {articles.length > 0 ? (
          articles.map((data) => (
            <ArticleCard key={data.objectID} data={data} />
          ))
        ) : (
          // Loading Spinner
          <div className="flex flex-col items-center gap-8">
            <p>Loading Content...</p>
            <svg
              role="status"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
