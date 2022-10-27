import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {
  // selectedFrameWork:string = 'angular'         //if angular is not selected then we need to give msg to user to select one
  selectedFrameWork:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
