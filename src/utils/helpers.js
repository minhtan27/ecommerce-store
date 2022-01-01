export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getUniqueValues = (productsArray, key) => {
  let unique = productsArray.map((item) => item[key]);
  if (key === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export const findImages = (productID, imageList) => {
  const image = imageList.find((i) => i.sys.id === productID);
  return image.fields.file.url;
};
