import { LitElement, html } from 'lit-element';

class ZenProgressElement extends LitElement {

  static get properties() {
    return {
      name: {
        type: String
      }, xp: {
        type: Number,
        hasChanged(newVal, oldVal) {
          if (newVal > oldVal) {
            console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
            return true;
          }
          else {
            console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
            return false;
          }
        }
      }
    };
  }

  render() {
    return html`
      <style> .xp { color: blue; } </style>
      <span class="title">This is the Zen Progress Component.</br></span>
      <span class="tooltip"><button @click=${this.click}>Click</button> for XP:<span class="xp" on-click="${this.click}">${this.xp}</span></span><br />
    `;
  }

  constructor() {
    super();
    this.name = "Zen Progress";
    this.xp = 0;
  }

  firstUpdated() {
    console.log("zen-progress firstUpdated");

    console.log(this.xp)
  }

  click() {
    this.xp = this.xp + 100;
    // let event = new CustomEvent('xp-changed', {
    //   detail: {
    //     message: 'XP increased',
    //     xp: this.xp
    //   }
    // });
    let myEvent = new CustomEvent('my-event', {
      detail: { message: 'my-event happened.', xp: this.xp },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(myEvent);
    let click = new Event('click');
    // click.detail.xp=this.xp;
    this.dispatchEvent(click);
  }

  async getMoreState() {
    return;
  }

  async changeProp() {
    this.prop1 = Math.random();
    await Promise.all(this.updateComplete, this.getMoreState());
    console.log('Update complete. Other state completed.');
  }
}

customElements.define('zen-progress', ZenProgressElement);