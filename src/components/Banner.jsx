import { camelToKebab } from "../utils/strings";

import CSS from "./Banner.module.css";

function Banner({
  image,
  children,
  name,
  textClassName = "",
  overlayOpacity = 0.6,
}) {
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${image})`,
  };

  return (
    <div className={CSS.banner} style={style}>
      {children && (
        <div className={`${textClassName} ${camelToKebab(name)}-text`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Banner;
