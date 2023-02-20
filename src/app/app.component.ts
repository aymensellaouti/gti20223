import { Component, Inject } from '@angular/core';
import { LOGGER_PROVIDER_TOKEN } from './providerTokens/logger.provider-token';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nb = 2;
  title = 'Starting Advanced Topics';
  constructor(@Inject(LOGGER_PROVIDER_TOKEN) private logger: LoggerService) {
    this.logger.logger('cc GTI :)');
  }
}
