import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  showPhraseAndButton = false;

  constructor(private navCtrl:NavController) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showPhraseAndButton = true;  
    }, 2000);
  }

  goToMoodPickerPage(){
    this.navCtrl.navigateForward("/mood-picker");
  }

}


