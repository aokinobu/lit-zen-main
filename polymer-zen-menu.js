import { LitElement, html } from 'lit-element';
import './ZenSelectionElement.js';

class ZenMenuElement extends LitElement {

  static get properties() { 
    return {
      xp: {
        // notify: true,
        type: Number
      },
      menu: {
        type: String
      }
    }
  }

  render() {
    return html`
      <style> .xp { color: red;   display: block;  float: left;   border: 1px solid red;   } </style>
      <span class="title">This is the Zen Menu Component.</br></span>
      <span class="tooltip">Current XP:</span><br />
      <span class="xp" >${this.xp}</span><br />
      <span class="tooltip">Current Menu:</span><br />
      <div class="menu" >${this.menu}</div>
      <zen-menu-selection on-click="selectionClick"></zen-menu-selection>
    `;
  }

  constructor() {
    super();
    this.xp = 0;
    this.menu = "";
  }


  updateMenu() {
    console.log("menu was clicked when XP was:" + this.xp);

    this.menu = "menu was clicked when XP was:" + this.xp;
  }

  selectionClick(e) {
    console.log(e);
    let element = this.shadowRoot.querySelector('zen-menu-selection');
    element.click();
    console.log(element.name);
  }
}

customElements.define('zen-menu', ZenMenuElement);