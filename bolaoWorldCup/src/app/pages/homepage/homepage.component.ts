import { Component, OnInit } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bwc-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  faCircle = faCircleUser;
  constructor() {}

  ngOnInit(): void {}
}
