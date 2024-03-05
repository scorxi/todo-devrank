import { AfterViewInit, Component, DoCheck, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AddListItemPayload } from 'src/models/activity';

const closeButton = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

interface ModalAddData {
  type: string,
  list_item_name?: string
}

@Component({
  selector: 'app-modal-new-list',
  templateUrl: './modal-new-list.component.html',
  styleUrls: ['./modal-new-list.component.scss']
})
export class ModalNewListComponent implements DoCheck, AfterViewInit, OnInit {
  listItemName: string = '';
  priority: string = 'very-high';
  itemResult: AddListItemPayload;
  
  isAddValid: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalNewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalAddData,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral('close-button', sanitizer.bypassSecurityTrustHtml(closeButton))
  }

  ngDoCheck(): void {
    if (this.listItemName || this.data?.list_item_name) {
      this.isAddValid = true;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  getPriority(option: string) {
    option = option == 'Medium' ? option = 'normal' : option.toLowerCase().replaceAll(' ', '-');
    this.itemResult = {
      priority: option
    }
  }

  onSave() {
    this.itemResult.title = this.listItemName;
    this.dialogRef.close(this.itemResult);
  }

  ngOnInit(): void {
      this.listItemName = this.data?.list_item_name ? this.data?.list_item_name : this.listItemName;
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const dropdown = document.querySelectorAll('.dropdown'); // to make it reusable if the components needed;

      dropdown.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected: any = dropdown.querySelector('.selected');

        select?.addEventListener('click', () => {
          select.classList.toggle('select-clicked');
          menu?.classList.toggle('menu-open');
        });

        options.forEach(option => {
          option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML;
            menu?.classList.remove('menu-open');

            options.forEach(option => {
              option.classList.remove('active');
            })
            option.classList.add('active');
          })
        })
      })
    })
  }
}
