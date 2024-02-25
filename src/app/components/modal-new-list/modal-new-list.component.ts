import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const closeButton = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
const expandButton = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="#111111" stroke-linecap="square"/>
</svg>
`

const collapseButton = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L12 9L18 15" stroke="#111111" stroke-linecap="square"/>
</svg>
`

const checkSelected = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 9L7.5 12.75L15 5.25" stroke="#4A4A4A" stroke-linecap="square"/>
</svg>
`;

const redPill = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#ED4C5C"/>
</svg>
`;
const orangePill = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#F8A541"/>
</svg>
`;
const greenPill = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#00A790"/>
</svg>
`;
const bluePill = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#428BC1"/>
</svg>
`;
const purplePill = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#8942C1"/>
</svg>
`;

@Component({
  selector: 'app-modal-new-list',
  templateUrl: './modal-new-list.component.html',
  styleUrls: ['./modal-new-list.component.scss']
})
export class ModalNewListComponent {
  constructor(
    // public dialogRef: MatDialogRef<ModalNewListComponent>,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral('close-button', sanitizer.bypassSecurityTrustHtml(closeButton))
    iconRegistry.addSvgIconLiteral('expand-button', sanitizer.bypassSecurityTrustHtml(expandButton))
    iconRegistry.addSvgIconLiteral('collapse-button', sanitizer.bypassSecurityTrustHtml(collapseButton))
    iconRegistry.addSvgIconLiteral('check-selected', sanitizer.bypassSecurityTrustHtml(checkSelected))
    iconRegistry.addSvgIconLiteral('red-pill', sanitizer.bypassSecurityTrustHtml(redPill))
    iconRegistry.addSvgIconLiteral('orange-pill', sanitizer.bypassSecurityTrustHtml(orangePill))
    iconRegistry.addSvgIconLiteral('green-pill', sanitizer.bypassSecurityTrustHtml(greenPill))
    iconRegistry.addSvgIconLiteral('blue-pill', sanitizer.bypassSecurityTrustHtml(bluePill))
    iconRegistry.addSvgIconLiteral('purple-pill', sanitizer.bypassSecurityTrustHtml(purplePill))
  }
}
