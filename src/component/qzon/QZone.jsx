import React from "react";

import Qzone1 from "../../assets/qZone1.png";
import Qzone2 from "../../assets/qZone2.png";
import Qzone3 from "../../assets/qZone3.png";
import { Link } from "react-router-dom";

function QZone() {
  return (
    <div className="mt-5">
      <h4>QZone</h4>
      <div className="link-img">
        <Link>
          <img src={Qzone1} alt="lol" />
        </Link>
      </div>
      <div className="link-img">
        <Link>
          <img src={Qzone2} alt="lol" />
        </Link>
      </div>
      <div className="link-img">
        <Link>
          <img src={Qzone3} alt="lol" />
        </Link>
      </div>
    </div>
  );
}

export default QZone;
