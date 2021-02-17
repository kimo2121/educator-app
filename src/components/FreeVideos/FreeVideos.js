import React from "react";
import "./FreeVideos.css";
import video1 from "../../assets/video1.png";
import video2 from "../../assets/video2.png";
import video3 from "../../assets/video3.png";
import { Card, Image } from "semantic-ui-react";
const FreeVideos = () => {
  const videosData = [
    { img: video1, text: "آلية عمل العام الدراسي الجديد" },
    { img: video2, text: "الدعامة فى الإنسان / العمود الفقري" },
    { img: video3, text: "آلية عمل العام الدراسي الجديد" },
  ];
  return (
    <div className="videos-section">
      <h2>الفديوهات المجانية</h2>
      <div className="free-videos">
        {videosData.map((item, index) => (
          <Card key={index}>
            <Image src={item.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{item.text}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </div>
      <button className="all-vids-btn">كل الفيديوهات</button>
    </div>
  );
};

export default FreeVideos;
