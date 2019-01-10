import {html} from '@polymer/polymer/lib/utils/html-tag.js';

 const template = html`
      <style>
        :host {
         // brand:
         --brand: #37b5e4;

         // action:
         --action-primary-default:#128bde;
         --action-primary-hover:  #0979c4;
         --action-primary-light:  #e7f3fb;
         --action-secondary-01:   #f3f6f8;
         --action-secondary-02:   #eaeff5;
         --action-secondary-03:   #cdd6df;
         --action-secondary-04:   #aab7c4;
         --action-secondary-05:   #8898a7;
         --action-secondary-06:   #6c7b8b;
         --action-secondary-07:   #0f1b27;

         // status:
         --status-success-default:   #2cce93;
         --status-success-light:     #d4f9ea;
         --status-success-hover:     #0baa70;
         --status-warning-default:   #fa932f;
         --status-warning-light:     #fff1e3;
         --status-warning-hover:     #ed7e13;
         --status-critical-default:  #ec445c;
         --status-critical-light:    #ffe8eb;
         --status-critical-hover:    #c9253c;

         // neutral:
         --neutral-00: #ffffff;
         --neutral-01: #fafafa;
         --neutral-02: #f4f4f4;
         --neutral-03: #ededed;
         --neutral-04: #e5e5e5;
         --neutral-05: #dedede;
         --neutral-06: #cbcbcb;
         --neutral-07: #b5b5b5;
         --neutral-08: #999999;
         --neutral-09: #777777;
         --neutral-10: #555555;
         --neutral-11: #3c3c3c;
         --neutral-12: #242424;
         --neutral-13: #111111;

         // misc:
         --misc-coral:            #fa7167;
         --misc-coral-light:      #ffcac6;
         --misc-tangerine:        #fa9c7d;
         --misc-tangerine-light:  #ffd4c5;
         --misc-peach:            #fdbd2b;
         --misc-peach-light:      #fff0c4;
         --misc-olive:            #acc952;
         --misc-olive-light:      #e9f3d0;
         --misc-turquoise:        #2dcfbe;
         --misc-turquoise-light:  #b4eeea;
         --misc-aqua:             #3dc9fc;
         --misc-aqua-light:       #bce7f6;
         --misc-viking:           #77b1e1;
         --misc-viking-light:     #cde3f8;
         --misc-lavender:         #cd89d2;
         --misc-lavender-light:   #f5daf7;

         // inputs:
         --input-field-onfocus:   #88c5ee;
         --input-field-error:     #f59ea9;
        }
      </style>
    `;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);