import { FaStar } from "react-icons/fa";
const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="card w-full bg-base-100  p-4 ">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 rounded-lg"
          src={news.author.img}
          alt={news.author.name}
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">{news.author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(news.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <h2 className="card-title mb-2">{news.title}</h2>

      <figure>
        <img
          className="w-full bg-cover h-[400px] rounded-md"
          src={news.thumbnail_url}
          alt={news.title}
        />
      </figure>
      <div className="card-body">
        <p>{news.details}</p>

        <div className="flex items-center mt-2">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={index}
                color={index < news.rating.number ? "#FFD700" : "#d1d5db"}
              />
            ))}
          </div>
          <span className="ml-2 text-sm">{news.rating.badge}</span>
        </div>
        <div className="card-actions justify-end">
          <span className="text-sm text-gray-500">{news.total_view} views</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
