import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public ocultar1: boolean = false;
  public ocultar2: boolean = true;
  click(){
    this.presentToast("DEBE ENCENDER LA UBICACIÓN PARA ENCONTRAR TRABAJOS CERCA");
  }
  accion1(){
  this.ocultar1 = !this.ocultar1;
  this.ocultar2 = !this.ocultar2;
  }
  private empleo =[
    {
    id : '1',
    title: 'Paseo de mascota',
    name: 'Juan',
    imageURL:'../../assets/img/paseomascota.png',
    comment:'Necesito dar un paseo a mi perro, pero no cuento con tiempo'
  },
  {
    id : '2',
    title: 'Manicure',
    name: 'Francisco',
    imageURL:'../../assets/img/manicure.jpg',
    comment:'Necesito dar un paseo a mi perro, pero no cuento con tiempo'
  },
  {
    id : '3',
    title: 'DJ',
    name: 'Francisco',
    imageURL:'../../assets/img/job3.jpg',
    comment:'Necesito dar un paseo a mi perro, pero no cuento con tiempo'
  }
] 

  constructor( public toastController: ToastController) {}
   ngOnInit() {
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
