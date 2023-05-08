import React from "react";

const NewsBox = ({ d }) => {
  const { author, content, date, imageUrl, readMoreUrl, time, title } = d;
  return (
    <div className="shadow-md rounded-md">
      <img alt="news_image" src={imageUrl} className="h-[200px] w-full rounded-t-md"/>
      <div className="p-4">
        <p className="font-bold">{title}</p>
        <p className="mt-2">
          {content.slice(0, 100)} <a href={readMoreUrl} className="text-blue-600 font-semibold">...Read More</a>
        </p>
        <p className="mt-2 text-blue-600 font-semibold">{author}</p>
        <p className="text-blue-600 font-semibold">{date}</p>
        <p className="text-blue-600 font-semibold">{time}</p>
      </div>
    </div>
  );
};

export default NewsBox;
