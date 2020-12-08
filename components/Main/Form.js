export default () => `
<div>
  <form>
    <span>
      <label for="name">Item Name</label>
      <input type="text" id="name" placeholder="Item Name" name="name" required />
    </span>

    <span>
      <label for="price">Item Price</label>
      <input
      type="number"
      id="price"
      min="0"
      placeholder="Item Price"
      name="price"
      required
    </span>

    <span>
      <label for="info">Additional Info.</label>
      <input type="text" id="info" placeholder="Additional Info" name="info" />
    </span>
    <button type="submit">Add Item</button>
  </form>
</div>
`;
