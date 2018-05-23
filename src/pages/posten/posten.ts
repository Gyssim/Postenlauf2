import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostendetailPage } from '../postendetail/postendetail';
import { PostenServiceProvider } from './../../providers/posten-service/posten-service'; 
import { Observable } from 'rxjs/Observable'; 


/**
 * Generated class for the PostenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posten',
  templateUrl: 'posten.html',
})
export class PostenPage {

  needItems: Observable<any[]>; 

  constructor(public navCtrl: NavController, public postenService: PostenServiceProvider, public navParams: NavParams) {
    console.log(this.postenService.getItems());
    this.needItems = this.postenService.getItems(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostenPage');
  }

  openPostenDetail(item){
    this.navCtrl.setRoot(PostendetailPage);
  }

  removeItem(id){ 
   } 

}
