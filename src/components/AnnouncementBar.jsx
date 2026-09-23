import { useState, useEffect } from "react";
import { fetchAnnouncements } from "../lib/sanity";

const AnnouncementBar = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements()
      .then(setAnnouncements)
      .catch(console.error);
  }, []);

  // Hiding the running text temporarily per user request
  return null;


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
      className="bg-green-600 text-white py-2 overflow-hidden whitespace-nowrap sticky top-[64px] z-40 border-t border-green-500/30"
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
