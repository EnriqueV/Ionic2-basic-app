import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Geolocation } from 'ionic-native';

import { Apps } from '../apps/apps';



declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  
 @ViewChild('place') mapElement: ElementRef;
    map: any;
  constructor(public navCtrl: NavController) {

   

 
    
  }

  ionViewLoaded(){
    this.loadPlace();
    }
 
    loadPlace(){


    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }

      addMarker(){
    
            let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter()
            });
          
            let content = "<h4>EL salvador places!</h4>";          
          
            this.addInfoWindow(marker, content);
    
           }

        addInfoWindow(marker, content){
      
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
      
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
    
    }



     more(){

      this.navCtrl.push(Apps);
     }
    

}
