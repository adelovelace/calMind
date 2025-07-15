import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
  standalone: false,
})
export class StatisticsPage implements OnInit {

  feelings = [
    { name: 'Happy', emoji: '😊', selected: false },
    { name: 'Sad', emoji: '😢', selected: false },
    { name: 'Angry', emoji: '😠', selected: false },
    { name: 'Anxious', emoji: '😰', selected: false },
    { name: 'Lonely', emoji: '😔', selected: false },
    { name: 'Sleepy', emoji: '😴', selected: false }
  ];

  before = "";
  beforeEmoji = "";
  after = "";
  afterEmoji = "";

  constructor(private navCtrl: NavController, private beforeData: SharedDataService, private afterData: SharedDataService) {}

  ngOnInit() {
    this.before = this.beforeData.getBeforeFeeling(); 
    this.after = this.afterData.getAfterFeeling();

    const selectedBeforeFeeling = this.feelings.find(feeling => feeling.name === this.before);
    const selectedAfterFeeling = this.feelings.find(feeling => feeling.name === this.after);
    
    if (selectedBeforeFeeling && selectedAfterFeeling) {
      this.beforeEmoji = selectedBeforeFeeling.emoji; 
      this.afterEmoji = selectedAfterFeeling.emoji; 
    }
  }

  goToThanks(){
    this.navCtrl.navigateForward("/thanks");
  }
}
