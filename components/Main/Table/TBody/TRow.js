export default ({ itemName, itemPrice, additionalInfo }) => `
  <tr>
    <td>${itemName}</td>
    <td>${itemPrice}</td>
    <td>${additionalInfo}</td>
  </tr>
`;
