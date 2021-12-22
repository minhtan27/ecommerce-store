import axios from "axios";
import { findImages } from "./helpers";

export const axiosProducts = async () => {
  const response = await axios(
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}&content_type=${process.env.REACT_APP_CONTENTFUL_TYPE}&select=fields,sys.id`
  );
  let products = response.data.items;
  products = products.map((product) => {
    const imageID = product.fields.image.sys.id;
    const responseImagesList = response.data.includes.Asset;
    const imageUrl = findImages(imageID, responseImagesList);
    return { id: product.sys.id, ...product.fields, imageUrl };
  });
  return products;
};

export const axiosSingleProduct = async (productID) => {
  let product = await axios(
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/environments/master/entries/${productID}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}`
  );
  const imageID = product.data.fields.image.sys.id;
  const productImage = await axios(
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/environments/master/assets/${imageID}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}`
  );
  return {
    id: product.data.sys.id,
    ...product.data.fields,
    imageUrl: productImage.data.fields.file.url,
  };
};
