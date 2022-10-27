import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  isDnone: boolean = false
  selectedFrameWork:string = 'vue'
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isDnone = !this.isDnone
    // if(this.isDnone){
    //   this.isDnone = false;
    // }else{
    //   this.isDnone = true;
    // }
  }
  onNavLinkClick(eve:Event){
    let text = ((eve.target) as HTMLElement)!.textContent
    console.log(text);
    if(text){
      this.selectedFrameWork= text?.toLowerCase().trim();
    }
  }

}



