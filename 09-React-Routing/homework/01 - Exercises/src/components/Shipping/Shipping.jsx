import React from "react";
import style from "./Shipping.module.css";

export default function Shipping() {
  return (
    <div className={style.cruises}>
      <ul>
        <li>
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2018/09/carnival-cruise-vector-logo-small.png"
            alt="Carnival"
          />
        </li>
        <li>
          <img
            src="https://img.cruisecritic.net/img-cc/image/18682924/image_x_21.jpg?auto=compress%2Cformat&fp-z=1&h=420&w=840&ar=2%3A1&dpr=1&q=55&ixlib=react-9.0.2"
            alt="Azamara"
          />
        </li>
        <li>
          <img
            src="https://www.cruisecapital.co.uk/wp-content/uploads/2020/07/Costa-Logo.png"
            alt="Costa"
          />
        </li>
        <li>
          <img
            src="https://www.cruisemapper.com/images/lines/85.jpg"
            alt="CroisiMer"
          />
        </li>
        <li>
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s7a76f7b3b0434b8e/image/if0d0e47e198c06ee/version/1501699542/silversea-cruises.jpg"
            alt="Silversea"
          />
        </li>
        <li>
          <img
            src="http://crew-center.com/sites/default/files/disney-cruise-line-logo.png"
            alt="DisneyCruise"
          />
        </li>
      </ul>
    </div>
  );
}
