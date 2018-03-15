import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AddItemPage} from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Cordova } from '@ionic-native/core';
import { File } from '@ionic-native/file';
import {Platform} from 'ionic-angular'; //for detect OS
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items =[];
  public dirName:string = "todolist";
  public dirPath:string;

  

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private uniqueDeviceID: UniqueDeviceID,public file:File, public alertCtrl: AlertController) {
 
    console.log("HEREEEEEEEEE");
    this.file.checkDir(this.file.applicationStorageDirectory, this.dirName)
    .then(() => {
      console.log('Directory exists');
    })
    .catch(err => {
      console.log('Directory doesnt exist');
    });
    
    
  }

  ionViewDidLoad(){
    this.items = [
     
    ];

    let filename:string = String(this.items.length+1) + ".todo";
    this.file.readAsText(this.file.documentsDirectory, filename )
    .then((fileStr) => {      
      var fileObj = JSON.parse(String(fileStr));
      console.log(fileObj);
      this.items.push(fileObj);
      console.log(this.items);
    })
    .catch((err) => {
      console.error(err);
    });
    
  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss( (item) => {
      if(item){
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  deleteItem(item){
    this.items.splice(item, 1);
  }


  saveItem(item){
    this.items.push(item);
    
    item.uid = this.items.length;
    console.log(item.title);
    console.log(item.uid);
    
   

    this.file.writeFile(this.file.documentsDirectory, item.uid +'.todo', JSON.stringify(item), {replace: true})
     .then(() => {      
       //console.log("SAVED " + item.uid +'.todo')
       
        let alert = this.alertCtrl.create({
          title: 'Task Saved',
          subTitle: '',
          buttons: ['OK']
        });
        alert.present();

     })
     .catch((err) => {
       console.error(err);
     });

 
  }


}
