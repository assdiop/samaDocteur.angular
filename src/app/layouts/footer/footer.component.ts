import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    
  }
    scrollToTop() {
        this.elementRef.nativeElement.ownerDocument.body.scrollTop = 0;
    }

}
