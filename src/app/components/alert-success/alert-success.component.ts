import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const successIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#00A790" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6V10" stroke="#00A790" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14H10.01" stroke="#00A790" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

export interface alertSuccessData {
  type: string
}

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss']
})
export class AlertSuccessComponent {

  constructor(
    icongRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<AlertSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alertSuccessData
  ) {
    icongRegistry.addSvgIconLiteral('alert-success', sanitizer.bypassSecurityTrustHtml(successIcon))
  }
}
