import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

const plusIcon =
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.99988V18.9999" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
`;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('plus', sanitizer.bypassSecurityTrustHtml(plusIcon));
  }
}
