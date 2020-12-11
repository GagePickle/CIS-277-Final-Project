export default {
  data: [],
  setData(newData) {
    this.data = this.data.concat(newData);
  },
  sortData(prop, order) {
    this.data = this.data.sort((a, b) =>
      order === "desc"
        ? b[prop].toUpperCase() < a[prop].toUpperCase()
        : a[prop].toUpperCase() < b[prop].toUpperCase()
    );
  },
};
