export default () => `
  <thead>
    <tr>
      <td>
        Item Name
        <!-- Use CSS to give adequate padding and 'click area' -->
        <button data-prop="itemName">
        <span></span>
        </button>
      </td>
      <td>
        Item Price<button></button>
      </td>
      <td>Additional Information
      <button data-prop="additionalInfo" >
        <span data-order="desc"></span>
        </button></td>
    </tr>
  </thead>
`;
