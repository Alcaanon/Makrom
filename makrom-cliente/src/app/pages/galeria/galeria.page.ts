import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  @ViewChild('slides')
  slides!: IonSlides;
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    allowTouchMove: false
  };
  currentIndex = 0;
  
  
  slidesArray = [
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' },
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' },
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' },
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' }
  ];

  selectedOption: string = '';
 
 
  constructor(private router: Router) {}

  goToPage(option: string) {
    switch (option) {
      case 'option1':
        this.router.navigateByUrl('/option1');
        break;
      case 'option2':
        this.router.navigateByUrl('/option2');
        break;
      case 'option3':
        this.router.navigateByUrl('/option3');
        break;
      default:
        break;
    }

  }

openExternalLinkFacebook(){
  window.open('https://www.facebook.com', '_blank')
}

openExternalLinkInstagram(){
  window.open('https://www.instagram.com', '_blank')
}

openExternalLinkYouTube(){
  window.open('https://www.youtube.com', '_blank')
}

ngOnInit(): void{

}




ionViewDidEnter() {
  this.slides.ionSlideDidChange.subscribe(async () => {
    this.currentIndex = await this.slides.getActiveIndex();
  });
}

async onScroll() {
  if (this.currentIndex === this.slidesArray.length - 1) {
    this.currentIndex = 0;
  } else {
    this.currentIndex++;
  }

  await this.slides.slideTo(this.currentIndex);
}
}
