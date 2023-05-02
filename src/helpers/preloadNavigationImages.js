import webpSupported from "@/helpers/webpSupport";
import { importAll } from "./importall";

import p1 from "../../public/images/partners/emporium.png";
import p2 from "../../public/images/partners/fedex.png";
import p3 from "../../public/images/partners/hebe.png";
import p4 from "../../public/images/partners/hevelianum.png";
import p5 from "../../public/images/partners/pepsico.png";
import p6 from "../../public/images/partners/png.png";
import p7 from "../../public/images/partners/pomerania.png";
import p8 from "../../public/images/partners/zabka.png";
import p9 from "../../public/images/partners/arrow.png";

const logos = [
  p1.src,
  p2.src,
  p3.src,
  p4.src,
  p5.src,
  p6.src,
  p7.src,
  p8.src,
  p9.src,
];

let set1, set2, set3, set4;

if (webpSupported) {
  set1 = importAll(
    require.context(
      `../../public/webpimages/galleries/studio-thumbnails/business/`,
      true,
      /\.(webp)$/
    )
  );
  set2 = importAll(
    require.context(
      `../../public/webpimages/galleries/reportage-thumbnails/corporate/`,
      true,
      /\.(webp)$/
    )
  );
  set3 = importAll(
    require.context(
      `../../public/webpimages/galleries/studio-thumbnails/image/`,
      true,
      /\.(webp)$/
    )
  );
  set4 = importAll(
    require.context(
      `../../public/webpimages/galleries/reportage-thumbnails/noncorporate/`,
      true,
      /\.(webp)$/
    )
  );
} else {
  set1 = importAll(
    require.context(
      `../../public/images/galleries/studio-thumbnails/business/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set2 = importAll(
    require.context(
      `../../public/images/galleries/reportage-thumbnails/corporate/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set3 = importAll(
    require.context(
      `../../public/images/galleries/studio-thumbnails/image/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set4 = importAll(
    require.context(
      `../../public/images/galleries/reportage-thumbnails/noncorporate/`,
      true,
      /\.(jpe?g)$/
    )
  );
}

let imagesToPreload = [...logos, ...set1, ...set2, ...set3, ...set4];

export const preloadNavImages = () => {
  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
