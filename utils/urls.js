export const API_URL = "https://cezara-online-backend.herokuapp.com";

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/honey.png";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
