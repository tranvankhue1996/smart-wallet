import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { 
  WalletPage,
  StatisticsPage,
  SpendPage,
  UserPage,
  TabsPage
} from '../pages';

import { 
  ItemWalletComponent
} from '../shared';

const ALL_PAGES = [
  WalletPage,
  StatisticsPage,
  SpendPage,
  UserPage,
  TabsPage
];

const ALL_SHARED_COMPONENT = [
  ItemWalletComponent
];

@NgModule({
  declarations: [
    MyApp,
    ALL_PAGES
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ALL_PAGES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
