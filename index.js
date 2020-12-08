import api from "./api";
import formHandler from "./lib";
import { Main } from "./components";
import store from "./store";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();
  formHandler(render);
};

api.index().then((itemData) => {
  store.setData(itemData);
  render();
});
