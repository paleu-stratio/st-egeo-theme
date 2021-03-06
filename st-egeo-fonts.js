import {html} from '@polymer/polymer/lib/utils/html-tag.js';

 const template = html`
      <style>
        :host {
          --egeo-nunito-sans:                  'Nunito Sans';
          --egeo-nunito-sans-italic:           'Nunito Sans Italic';
          --egeo-nunito-sans-light:            'Nunito Sans Light';
          --egeo-nunito-sans-light-italic:     'Nunito Sans Light Italic';
          --egeo-nunito-sans-semiBold:         'Nunito Sans SemiBold';
          --egeo-nunito-sans-semiBold-italic:  'Nunito Sans SemiBold Italic';
          --egeo-nunito-sans-bold:             'Nunito Sans Bold';
          --egeo-nunito-sans-bold-italic:      'Nunito Sans Bold Italic';
          --egeo-nunito-sans-extraBold:        'Nunito Sans ExtraBold';
          --egeo-nunito-sans-extraBold-italic: 'Nunito Sans ExtraBold Italic';
          --egeo-stratio-icons:                'ico_stratio';

          --egeo-font-size-giant:     2rem;       // 32px
          --egeo-font-size-xxxlarge:  1.813rem;   // 29px
          --egeo-font-size-xxlarge:   1.563rem;   // 25px
          --egeo-font-size-xlarge:    1.375rem;   // 22px
          --egeo-font-size-large:     1.25rem;    // 20px
          --egeo-font-size-medium:    1.125rem;   // 18px
          --egeo-font-size-small:     1rem;       // 16px
          --egeo-font-size-xsmall:    0.938rem;   // 15px
          --egeo-font-size-xxsmall:   0.875rem;   // 14px
          --egeo-font-size-xxxsmall:  0.75rem;    // 12px

          --egeo-line-height-giant:      2.375rem;  // 38px
          --egeo-line-height-xxxlarge:   2.125rem;  // 34px
          --egeo-line-height-xxlarge:    1.875rem;  // 30px
          --egeo-line-height-xlarge:     1.625rem;  // 26px
          --egeo-line-height-large:      1.5rem;    // 24px
          --egeo-line-height-medium:     1.375rem;  // 22px
          --egeo-line-height-small:      1.313rem;  // 21px
          --egeo-line-height-xsmall:     1.25rem;   // 20px
          --egeo-line-height-xxsmall:    1.125rem;  // 18px
          --egeo-line-height-xxxsmall:   1.063rem;  // 17px
        }
      </style>
    `;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
