import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderEvent = new EventEmitter<Boolean>();

  constructor() { }

  show() {
    // this.loaderEvent.emit(true);
  }

  hide() {
    // this.loaderEvent.emit(false);
  }
}
