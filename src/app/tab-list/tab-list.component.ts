import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  template: '<ng-content></ng-content>'  
})
export class TabListComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
  ngAfterContentInit() {
    this.tabList.toArray()[0].printTitle();
  }

}
