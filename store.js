function sortAlpha({ a, b, prop, order = "desc" } = {}) {
  return order === "desc"
    ? b[prop].toUpperCase() < a[prop].toUpperCase()
    : a[prop].toUpperCase() < b[prop].toUpperCase();
}

function sortNum({ a, b, order } = {}) {}

export default {
  data: [],
  setData(newData) {
    this.data = this.data.concat(newData);
  },
  sortData(prop, order) {
    this.data = this.data.sort((a, b) => {
      if (typeof a[prop] === "string") {
        return sortAlpha({ a, b, prop, order });
      }
      return sortNum();
    });
  },
};
