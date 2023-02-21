import { Component, Inject } from '@angular/core';
import { LOGGER_PROVIDER_TOKEN } from './providerTokens/logger.provider-token';
import { LoggerService } from './services/logger.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nb = 2;
  title = 'Starting Advanced Topics';
  constructor(
    private logger: LoggerService,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    this.logger.logger('cc GTI :)');
    /*     this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
      }
    }); */
  }
}
