import webpSupported from "./webpSupport";
import { importAll } from "./importall";

export function importAnimals() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../../public/webpimages/galleries/animals/`,
        true,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/webpimages/galleries/animals-thumbnails/`,
        true,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../../public/images/galleries/animals`,
        true,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/images/galleries/animals-thumbnails`,
        true,
        /\.(jpe?g)$/
      )
    );
  }

  return { images, thumbnailImages };
}

export function importStudio() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../../public/webpimages/galleries/studio/`,
        true,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/webpimages/galleries/studio-thumbnails/`,
        true,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../../public/images/galleries/studio`,
        true,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/images/galleries/studio-thumbnails`,
        true,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}

export function importOutdoors() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../../public/webpimages/galleries/travel/`,
        true,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/webpimages/galleries/travel-thumbnails/`,
        true,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../../public/images/galleries/travel`,
        true,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/images/galleries/travel-thumbnails`,
        true,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}

export function importReportage() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../../public/webpimages/galleries/reportage/`,
        true,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/webpimages/galleries/reportage-thumbnails/`,
        true,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../../public/images/galleries/reportage`,
        true,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/images/galleries/reportage-thumbnails`,
        true,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}

export function importWedding() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../../public/webpimages/galleries/reportage/wedding/`,
        true,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/webpimages/galleries/reportage-thumbnails/wedding/`,
        true,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../../public/images/galleries/reportage/wedding`,
        true,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../../public/images/galleries/reportage-thumbnails/wedding`,
        true,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}
