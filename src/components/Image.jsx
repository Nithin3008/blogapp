import { IKImage } from "imagekitio-react";

function Image({ path, styling, alt }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IKIT_URL_ENDPOINT}
      path={path}
      className={styling}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
}

export default Image;
