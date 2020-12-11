export default {
  data: [],
  setData(newData) {
    this.data = this.data.concat(newData);
  },
  sortData(prop, order) {
    console.log(prop, order, "store");
    this.data = this.data.sort((a, b) =>
      order === "desc" ? b[prop] - a[prop] : a[prop] - b[prop]
    );
  },
};
