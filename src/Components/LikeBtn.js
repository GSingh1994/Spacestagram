import { useState } from "react";
import { RiHeart2Line } from "react-icons/ri";
import { RiHeart2Fill } from "react-icons/ri";

import { IconContext } from "react-icons";

const LikeBtn = () => {
  const [heartIcon, setHeartIcon] = useState(false);
  const handleClick = () => setHeartIcon(!heartIcon);

  return (
    <IconContext.Provider value={{ size: "2rem", color: "#ff1493" }}>
      <div onClick={handleClick}>
        {heartIcon ? <RiHeart2Fill /> : <RiHeart2Line />}
      </div>
    </IconContext.Provider>
  );
};
export default LikeBtn;
