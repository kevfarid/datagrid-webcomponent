import { html, css, LitElement } from "lit";
import createThead from "./tableParts/create-thead";
import createTbody from "./tableParts/create-tbody";
import { filterData, filtersExecuted } from "./filterFns";

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      cols: { type: Array },
      rows: { type: Array },
      activeFilter: { type: Boolean },
      filters: { type: Object },
    };
  }

  constructor() {
    super();
    this.cols = [];
    this.rows = [];
    this.activeFilter = false;
    this.filters = {};
  }

  _onClick(e) {
    const { id } = e.target;
    if (!this.activeFilter) {
      return;
    }

    this.rows = filterData(id, this.rows);
    this.requestUpdate();
  }

  render() {
    return html`
      <table>
        ${createThead(this.cols, this._onClick)}
        ${createTbody(this.rows, this.cols)}
      </table>
    `;
  }
}

window.customElements.define("data-grid", MyElement);
