import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Creates an instance of HeaderComponent.
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @memberof HeaderComponent
   */
  public constructor(
    private route: ActivatedRoute
  ) {
  }

  /**
   * Metodo init
   * @memberof HeaderComponent
   */
  ngOnInit() {
    const item = this.route.snapshot;
    console.warn(item)
  }

}
