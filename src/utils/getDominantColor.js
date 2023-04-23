import ColorThief from "colorthief";

/**
 * Get dominant color in an image
 * @param {string} imageUrl - link to image
 * @param {function} callback - function to call when color is ready
 * @author Ammiel Yawson <ammielyawson.com>
 */
export default function getDominantColor(imageUrl, callback) {
  const img = document.createElement("IMG");
  const colorThief = new ColorThief();
  img.setAttribute("src", imageUrl);
  img.crossOrigin = "Anonymous";
  if (img.complete) {
    callback(colorThief.getColor(img));
  } else {
    img.addEventListener("load", function () {
      callback(colorThief.getColor(img));
    });
  }
}
