import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { 
  expandButton, 
  redPill, 
  orangePill, 
  greenPill, 
  bluePill, 
  purplePill 
} from 'src/assets/svgs';

@Component({
  selector: 'app-pill-dropdown',
  templateUrl: './pill-dropdown.component.html',
  styleUrls: ['./pill-dropdown.component.scss']
})
export class PillDropdownComponent implements OnInit {
  @Input() options: string[];
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  selectedOption: string = 'Very High';
  menuOpen: boolean = false;

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral('expand-button', sanitizer.bypassSecurityTrustHtml(expandButton))
    iconRegistry.addSvgIconLiteral('Very High', sanitizer.bypassSecurityTrustHtml(redPill))
    iconRegistry.addSvgIconLiteral('High', sanitizer.bypassSecurityTrustHtml(orangePill))
    iconRegistry.addSvgIconLiteral('Medium', sanitizer.bypassSecurityTrustHtml(greenPill))
    iconRegistry.addSvgIconLiteral('Low', sanitizer.bypassSecurityTrustHtml(bluePill))
    iconRegistry.addSvgIconLiteral('Very Low', sanitizer.bypassSecurityTrustHtml(purplePill))
  }

  ngOnInit(): void {
      this.optionSelected.emit(this.selectedOption);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.menuOpen = false;
    this.optionSelected.emit(option);
  }
}
