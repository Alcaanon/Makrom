import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  
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

email!: string;

formulario!: FormGroup;

usuario: Usuario = {
  id: 0,
  email: "",
  senha: "",
  confirma_senha: ""
}

submit() {
  const data = { email: this.usuario.email};
  this.usuarioService.resetpassword(data)
  .subscribe({
    next: (res) => {
    console.log(res);
    console.log('Email enviado.')
    // this.navCtrl.navigateForward('/inicio');
    },
    error: (e) => {
      console.error(e)
      console.log("Email não foi enviado.", data);
    }
    });
  }


}


