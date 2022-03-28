import { Component } from '@angular/core';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TAXI 24';

  sidenavIsCollapse = false;
  screenWidth = 0;
  onToggleSidenav(data: SidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.sidenavIsCollapse = data.collapsed;
  }
}
