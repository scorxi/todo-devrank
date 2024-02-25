import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const alertSuccessIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#00A790" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V12" stroke="#00A790" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16H12.01" stroke="#00A790" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss']
})
export class AlertSuccessComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('alert-success-icon', sanitizer.bypassSecurityTrustHtml(alertSuccessIcon))
  }
}