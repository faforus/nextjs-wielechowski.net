import webpSupported from "@/helpers/webpSupport";
import { importAll } from "./importall";

let set1, set2, set3, set4;

if (webpSupported) {
  set1 = importAll(
    require.context(
      `../../public/webpimages/galleries/studio-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
  set2 = importAll(
    require.context(
      `../../public/webpimages/galleries/reportage-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
  set3 = importAll(
    require.context(
      `../../public/webpimages/galleries/animals-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
  set4 = importAll(
    require.context(
      `../../public/webpimages/galleries/travel-thumbnails/`,
      true,
      /\.(webp)$/
    )
  );
} else {
  set1 = importAll(
    require.context(
      `../../public/images/galleries/studio-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set2 = importAll(
    require.context(
      `../../public/images/galleries/reportage-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set3 = importAll(
    require.context(
      `../../public/images/galleries/animals-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
  set4 = importAll(
    require.context(
      `../../public/images/galleries/travel-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );
}

let imagesToPreload = [...set1, ...set2, ...set3, ...set4];

export const preloadGalImages = () => {
  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
