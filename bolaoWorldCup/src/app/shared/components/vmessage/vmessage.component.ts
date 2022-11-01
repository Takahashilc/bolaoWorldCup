import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bwc-vmessage',
  templateUrl: './vmessage.component.html',
})
export class VmessageComponent implements OnInit {
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
