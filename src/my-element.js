import { html, css, LitElement } from "lit";
import "./datagrid/datagrid";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.cols = [
      {
        key: "name",
        label: "Name",
      },
      {
        key: "age",
        label: "Age",
      },
    ];
    this.rows = [
      {
        name: "John Doe",
        age: "42",
      },
      {
        name: "Jane Doe",
        age: "43",
      },
    ];
    this.filters = {
      name: "jane",
    };
  }

  render() {
    return html`<data-grid
      .filters=${this.filters}
      .cols=${this.cols}
      .rows=${this.rows}
    ></data-grid>`;
  }
}

window.customElements.define("my-element", MyElement);
