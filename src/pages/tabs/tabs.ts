import { Component } from '@angular/core';

import { WalletPage } from '../wallet/wallet';
import { UserPage } from '../user/user';
import { StatisticsPage } from '../statistics/statistics';
import { SpendPage } from '../spend/spend';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WalletPage;
  tab2Root = SpendPage;
  tab3Root = StatisticsPage;
  tab4Root = UserPage;

  constructor() {

  }
}
