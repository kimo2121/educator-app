import React from "react";
import "./AboutInstructor.css";
import image2 from "../../assets/image2.png";
const AboutInstructor = () => {
  return (
    <div className="about-constructor">
      <h2 className="nowhere">عن الاستاذ محمد أحمد</h2>
      <div className="header-highlight"></div>
      <div className="intro">
        <img src={image2} alt="" />
        <span>
          هناك <strong>حقيقة</strong> مثبتة منذ زمن طويل وهي أن المحتوى المقروء
          لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
          الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
          <strong> إيبسوم </strong>
          لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا
          يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
          <strong> مقروء </strong>.
        </span>
      </div>
    </div>
  );
};

export default AboutInstructor;
