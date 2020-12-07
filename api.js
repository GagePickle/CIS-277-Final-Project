export default {
  async index() {
    const res = await fetch(
      "https://my-json-server.typicode.com/gagepickle/items-json/items"
    );

    return res.json();
  },
};
