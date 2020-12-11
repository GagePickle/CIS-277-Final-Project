import api from "./api";
import db from "./db";
import handlers from "./lib";
import { Main } from "./components";
import store from "./store";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();
  handlers.attachFormHandler(render);
  handlers.attachSortHandlers(render);
};

api.index().then((itemData) => {
  store.setData(itemData);
  render();
});
