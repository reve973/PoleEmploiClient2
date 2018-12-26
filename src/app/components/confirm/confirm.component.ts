import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
