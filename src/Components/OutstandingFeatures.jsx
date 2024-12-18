import React from "react";
import image1 from "../Assets/pick-meals-image.png";
import image2 from "../Assets/choose-image.png";
import image3 from "../Assets/delivery-image.png";

const OutstandingFeatures = () => {
  const workInfoData = [
    {
      image: image1,
      title: "Đọc trực tuyến",
      text: "Đọc truyện ở bất cứ đâu không cần tải về.",
    },
    {
      image: image2,
      title: "Tương tác",
      text: "Chia sẻ cảm xúc thảo luận sôi nổi",
    },
    {
      image: image3,
      title: "Cập nhật liên tục",
      text: "Tập mới mỗi tuần nhanh chóng mỗi tuần",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Giới thiệu</p>
        <h1 className="primary-heading">Tính năng</h1>
        <p className="primary-text">
        Website đọc truyện tranh online MangaToon có các chức năng chính sau:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutstandingFeatures; 