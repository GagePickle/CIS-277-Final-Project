import db from "./db";

export default {
  async index() {
    const docRef = await db.collection("items").get();

    return docRef.docs.map((doc) => ({ ...doc.data() }));
  },

  async create(item) {
    return db.collection("items").add(item);
  },
};
