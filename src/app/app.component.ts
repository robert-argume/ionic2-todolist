import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { File } from '@ionic-native/file';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, uniqueDeviceID: UniqueDeviceID, file:File) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    //    uniqueDeviceID.get().then((uuid: any) => console.log(uuid))
    //  .catch((error: any) => console.log(error));
    
    });

  }
}

