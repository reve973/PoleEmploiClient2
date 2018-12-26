import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  private show: Boolean = false;

  constructor(private sLoader: LoaderService) { }

  ngOnInit() {
    this.sLoader.loaderEvent.subscribe(value => {
      this.show = value;
    });
  }
}
