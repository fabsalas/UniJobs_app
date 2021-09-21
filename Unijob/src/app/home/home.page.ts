import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

  constructor( public toastController: ToastController) {}
   ngOnInit() {
  }
 

  click(){
    this.presentToast("DEBE ENCENDER LA UBICACIÓN PARA ENCONTRAR TRABAJOS CERCA");
  }
 


  async presentToast(message: string, duration?: number){
    const toast = await this.toastController.create(
      {
        message: message,
        duration: duration?duration:2500
      }
    );
    toast.present();
  }
}
