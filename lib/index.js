import db from "/db";
import store from "/store";

const addItem = async ({ itemName, itemPrice, additionalInfo }) => {
  await db.collection("items").add({ itemName, itemPrice, additionalInfo });
  store.setData({ itemName, itemPrice, additionalInfo });
  return true;
};

const processForm = (form) => Object.fromEntries(new FormData(form));
