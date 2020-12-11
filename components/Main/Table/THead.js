export default () => `
  <thead>
    <tr>
      <td class="hover">
        Item Name<button><span data-test="test" data-order="${
          localStorage.getItem("itemName") || "desc"
        }" data-prop="itemName"></span></button>
      </td>
      <td>
        Item Price<button><span data-order="${
          localStorage.getItem("itemPrice") || "desc"
        }" data-prop="itemPrice"></span></button>
      </td>
      <td>Additional Information</td>
    </tr>
  </thead>
`;
