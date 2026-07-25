import { useState, useEffect } from "react";
import { fetchAnnouncements } from "../lib/sanity";

const AnnouncementBar = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements()
      .then(setAnnouncements)
      .catch(console.error);
  }, []);

  if (announcements.length === 0) return null;

  const renderGroup = (prefix) =>
    announcements.map((item, idx) => (
      <span key={`${prefix}-${item._id}`} className="font-medium text-sm whitespace-nowrap">
        {item.text}
        {idx < announcements.length - 1 && (
          <span className="mx-6 text-green-300">•</span>
        )}
      </span>
    ));

  return (
    <div
      className="bg-green-600 text-white py-2 overflow-hidden whitespace-nowrap"
      aria-label="Informasi terkini"
    >
      <div className="animate-marquee">
        <div className="flex items-center">
          {renderGroup("a")}
          <span className="w-20 inline-block" />
          {renderGroup("b")}
          <span className="w-20 inline-block" />
        </div>
        <div className="flex items-center">
          {renderGroup("c")}
          <span className="w-20 inline-block" />
          {renderGroup("d")}
          <span className="w-20 inline-block" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
