import webpSupported from "@/helpers/webpSupport";

import wgal1 from "../../public/webpimages/reportaz1.webp";
import wgal2 from "../../public/webpimages/studio.webp";
import wgal3 from "../../public/webpimages/animals.webp";
import wgal4 from "../../public/webpimages/plener.webp";
import wkon1 from "../../public/webpimages/kontakt.webp";

import gal1 from "../../public/images/reportaz1.jpg";
import gal2 from "../../public/images/studio.jpg";
import gal3 from "../../public/images/animals.jpg";
import gal4 from "../../public/images/plener.jpg";
import kon1 from "../../public/images/kontakt.jpg";

let imagesToPreload = [];
if (webpSupported) {
  imagesToPreload = [wgal1.src, wgal2.src, wgal3.src, wgal4.src, wkon1.src];
} else {
  imagesToPreload = [gal1.src, gal2.src, gal3.src, gal4.src, kon1.src];
}

export const preloadAppImages = () => {
  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
