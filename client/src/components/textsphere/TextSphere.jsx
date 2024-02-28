import React, { useEffect, useState } from "react";




import "./TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {

   const [tagCloud, setTagCloud] = useState(null)

  // Animation settings for Text Cloud
  useEffect(() => {
  setTagCloud(true)
    return () => {
      
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Next",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 200,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, [tagCloud]);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
