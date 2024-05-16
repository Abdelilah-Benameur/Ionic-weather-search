  import { HttpClient } from '@angular/common/http';
  import { Component, Injectable, OnInit } from '@angular/core';

  @Component({
    selector: 'app-meteo-widget',
    templateUrl: './meteo-widget.page.html',
    styleUrls: ['./meteo-widget.page.scss'],
  })

  @Injectable({
    providedIn: 'root'
  })


  export class MeteoWidgetPage  {


    isible:boolean =false;
    searchPerformed: boolean = false;
    errorMessage: string = '';


    citys  :string="";
    pays: any;
    temp: number = 0;
    pres: number = 0;
    hum: number = 0;
    ville: number = 0;
    weatherData: any;
    dataurl:string="";



    constructor(private httpclient: HttpClient) {

    }

    getWeatherData(){
      this.dataurl= "https://api.openweathermap.org/data/2.5/weather?q="+this.citys+"&appid=bfa5e4d3a3f69f594262ebea9cc05cae&units=metric";
      this.httpclient.get(this.dataurl)
      .subscribe(
        (response) =>{
          this.weatherData= response;
          console.log(this.weatherData);
          this.pays= this.weatherData['sys']['country'];
          this.temp= this.weatherData['main']['temp'];
          this.pres= this.weatherData['main']['pressure'];
          this.hum= this.weatherData['main']['humidity'];
          this.ville=this.weatherData['name'];


        },
        (Error) =>{
          console.log(Error);
        }
      )
    }




    csearch(){
      this.getWeatherData();
      console.log(this.dataurl);
      console.log(this.citys);

      console.log('Search button clicked');

      // Check if the input is empty
    if (this.citys.trim() === '') {
      // Set the error message
      this.errorMessage = 'Please enter a city';
      return; // Return early to prevent further execution
    }

    // Clear the error message if input is not empty
    this.errorMessage = '';

    // Toggle the visibility of the image only on the first click
      if (!this.isible) {
        this.isible = true;
      }

      // Set the flag to true to indicate that search has been performed
      this.searchPerformed = true;
      this.temp = 25; // Dummy temperature value
    this.pres = 1015; // Dummy pressure value
    this.hum = 60; // Dummy humidity value

    }
  }
