import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `st-egeo-theme`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class StEgeoTheme extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'st-egeo-theme',
      },
    };
  }
}

window.customElements.define('st-egeo-theme', StEgeoTheme);
