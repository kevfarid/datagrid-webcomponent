import { html } from "lit";

export default function createTbody(rows, cols) {
  return html`
    <tbody>
      ${rows.map(
        (row) => html`
          <tr>
            ${cols.map((col) => html`<td id=${col?.key}>${row[col?.key]}</td>`)}
          </tr>
        `
      )}
    </tbody>
  `;
}
