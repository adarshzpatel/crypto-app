import moment from "moment";
import React from "react";

const NewsCard = ({
  name,
  description,
  image,
  datePublished,
  url,
  source,
}) => {
  return (
    <div className="group max-w-lg bg-white  flex flex-col gap-2 shadow-lg  hover:scale-105 hover:shadow-2xl transform transition-all duration-100 p-2 rounded-md  ">
      <div className="flex gap-2">
        {/* Thumbnail */}
        {image &&
          <img
            src={image}
            alt="thumbnail"
            className="rounded-md object-cover h-16"
          />
        }
        {/* Title */}
        <h2 className="font-semibold leading-5  text-gray-900 ">{name}</h2>
      </div>

      {/* Description */}
      <p className="text-gray-800 text-sm overflow-hidden max-h-full">
        {description.length > 100 ? `${description.substring(0,100)}...`
        : description}
      </p>

      <div className='flex justify-between w-full items-end'>
      {/* Date & Source */}
      <p className="h-4  font-medium text-xs text-gray-400  flex items-center gap-2">
        {moment(datePublished).format("LL")}{" "}
        <span className=" text-3xl"> · </span>
        {source}
      </p>
      <a
        role='button'
        target="_blank"
        rel="noopener noreferrer"
        className="text-right text-white text-sm min-w-max  bg-blue-600 hover:bg-blue-700 rounded px-2 py-1"
        href={url}
        >
        {" "}
        Read More
      </a>
        </div>
    </div>
  );
};

export default NewsCard;
