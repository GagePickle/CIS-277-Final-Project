import TRow from "./TRow";
import store from "/store";

const renderRows = (items) => items.map((item) => TRow(item)).join("");

export default () => `
    <tbody>
      ${renderRows(store.data)}
    </tbody>
  `;
