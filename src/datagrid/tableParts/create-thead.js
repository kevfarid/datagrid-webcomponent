import { html } from "lit";

export default function createThead(cols, onClick) {
  return html`
    <thead>
      <tr>
        ${cols.map(
          (col) => html`<th id=${col?.key} @click=${onClick}>${col?.label}</th>`
        )}
      </tr>
    </thead>
  `;
}
