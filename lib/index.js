import db from "/db";
import store from "/store";

const addItem = async ({ itemName, itemPrice, additionalInfo }) => {
  await db.collection("items").add({ itemName, itemPrice, additionalInfo });
  store.setData({ itemName, itemPrice, additionalInfo });
  return true;
};

const processForm = (form) => Object.fromEntries(new FormData(form));

const toggleSorter = (sorter) => {
  const currentSorter = sorter;

  const { order, prop } = sorter.dataset;

  currentSorter.dataset.order = order === "desc" ? "asc" : "desc";

  localStorage.setItem(prop, currentSorter.dataset.order);
};

export default {
  attachFormHandler(cb) {
    document.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault();

      if (await addItem(processForm(event.target))) {
        cb();
      }
    });
  },
  attachSortHandlers(cb) {
    document.querySelectorAll("td span").forEach((sorter) =>
      sorter.addEventListener("click", function handleSort() {
        toggleSorter(this);
        store.sortData(this.dataset.prop, this.dataset.order);
        cb();
      })
    );
  },
};
