import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';

import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';

import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';

import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { UnlessDirective } from './directives/unless.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { TestPurePipeComponent } from './components/test-pure-pipe/test-pure-pipe.component';
import { FxPipe } from './pipes/fx.pipe';
import { LOGGER_PROVIDER_TOKEN } from './providerTokens/logger.provider-token';
import { loggerServiceProviderFactory } from './providersFactory/test.factory-provider';
import { LoggerService } from './services/logger.service';
import { TodoService } from './todo/service/todo.service';
import { UUID_PROVIDER } from './providerTokens/uuid.provider-token';

import { v4 as uuidV4 } from 'uuid';
import { SliderComponent } from './components/slider/slider.component';
import { OnPushComponent } from './changeDetection/on-push/on-push.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    PereComponent,
    FilsComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    NavbarComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    UnlessDirective,
    RepeatDirective,
    TestPurePipeComponent,
    FxPipe,
    SliderComponent,
    OnPushComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
  ],
  providers: [
    AuthInterceptorProvider,
    {
      provide: LoggerService,
      useClass: LoggerService,
    },
    TodoService,
    {
      provide: UUID_PROVIDER,
      useValue: uuidV4,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
