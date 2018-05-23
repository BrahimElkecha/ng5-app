import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBxA5l2-a4cPuOIiO33vVZF-iDsPC27HKA",
      authDomain: "fa-wasafat.firebaseapp.com"
    });
  }

  onNavigate(slected: string) {
    this.loadedFeature = slected;
  }
}
