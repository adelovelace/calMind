import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
  standalone: false,
})
export class ThanksPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/home');  // Redirigir a la página 'home'
    }, 1000);
  }

  

}
