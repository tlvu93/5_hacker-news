import PropTypes from 'prop-types';

const ArticleCard = (data) => {
  const shortenNum = (num) => (num / 1000).toFixed(1) + 'k';

  const getDateByElapsedTime = (seconds) => {
    let elapsedTime = (new Date() - seconds * 1000) / 1000; // in seconds

    if (elapsedTime > 60) elapsedTime /= 60; // convert to minutes
    else return `${elapsedTime.toFixed(0)} seconds ago`;
    if (elapsedTime > 60) elapsedTime /= 60; // convert to hours
    else return `${elapsedTime.toFixed(0)} minutes ago`;
    if (elapsedTime > 24) elapsedTime /= 24; // convert to days
    else return `${elapsedTime.toFixed(0)} hours ago`;
    if (elapsedTime > 365) elapsedTime /= 365; // convert to days
    else return `${elapsedTime.toFixed(0)} days ago`;

    return `${elapsedTime.toFixed(0)} years ago`;
  };

  return (
    <div className="pl-10 relative border border-gray-300 rounded-md bg-gray-100">
      <div className="flex flex-col absolute left-0 ml-1.5">
        {/* Upvote */}
        <button className="h-6 w-6">
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
        <p className="text-sm text-center">
          {data.points < 1000 ? data.points : shortenNum(data.points)}
        </p>
        {/* Downvote */}
        <button className="h-6 w-6">
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
        <div className="bg-white p-2 min-h-[82px]">
          {/* Article Info */}
          <div>
            <p className="text-xs">
              Posted by {data.author} {getDateByElapsedTime(data.created_at_i)}
            </p>
          </div>
          <p className="font-bold">{data.title}</p>
          <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <div className="flex gap-2 text-sm">
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
                Share
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
                Save
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

export default ArticleCard;
