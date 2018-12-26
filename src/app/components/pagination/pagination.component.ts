import { Page } from '../../class/Page';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: Page<Object>;
  @Output() pageEvent = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  array(length) {
    return new Array(length);
  }

  goToPage(num: Number) {
    this.pageEvent.emit(num);
  }
}
