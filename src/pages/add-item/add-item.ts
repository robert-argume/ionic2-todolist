import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  uid: string;
  title: string;
  description: string;
  due: DateTime;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem(){
 
    let newItem = {
      uid: this.uid,
      title: this.title,
      description: this.description,
      due: this.due
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }

}

 
  
 