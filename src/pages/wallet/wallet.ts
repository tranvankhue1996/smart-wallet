import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})


export class WalletPage {

  listItem: any = [
    {
      title: "Lương tháng 13",
      price: "2.575.000",
      date: "02/02/2018",
      time: "14:20"
    },
    {
      title: "Lương tháng 2",
      price: "7.185.000",
      date: "26/01/2018",
      time: "09:40"
    },
    {
      title: "Lương thưởng FScoin",
      price: "8.160.000",
      date: "31/01/2018",
      time: "18:36"
    }
  ];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }


  openMenu(item: any) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Tùy Chọn',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Xem Chi Tiết',
          icon: !this.platform.is('ios') ? 'eye' : null,
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Bạn đang xem: ' + item.title,
              duration: 3000
            });
            toast.present();
          }
        },
        {
          text: 'Sửa',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Bạn muốn sửa: ' + item.title,
              duration: 3000
            });
            toast.present();
          }
        },
        {
          text: 'Xóa',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Bạn muốn xóa: ' + item.title,
              duration: 3000
            });
            toast.present();
          }
        },
        {
          text: 'Hủy Bỏ',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
