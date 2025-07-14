import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mood-picker',
  templateUrl: './mood-picker.page.html',
  styleUrls: ['./mood-picker.page.scss'],
  standalone: false,
})
export class MoodPickerPage implements OnInit {

  feelings = [
  { name: 'Happy', emoji: '😊', selected: false },
  { name: 'Sad', emoji: '😢', selected: false },
  { name: 'Angry', emoji: '😠', selected: false },
  { name: 'Anxious', emoji: '😰', selected: false },
  { name: 'Lonely', emoji: '😔', selected: false },
  { name: 'Sleepy', emoji: '😴', selected: false }
  ];


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  selectFeeling(event: CustomEvent): void {
    console.log('Current feeling:', event.detail.value.name);
    localStorage.setItem('feeling', event.detail.value);
  }

  goToImageSelectorPage() {
    this.navCtrl.navigateForward("/word-search")
  }

}
