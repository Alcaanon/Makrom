import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { Login } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  selectedOption: string = '';
  constructor(
    private router: Router,
    private formBuilder:  FormBuilder,
    private usersService: UsuarioService,
    public navCtrl: NavController,
  ) { }

  login: Login = {
    usuario: "",
    senha: ""
  }

  ngOnInit(): void {
    this.validaForm();
  }
  
  formulariologin!: FormGroup;

  validaForm(){
    this.formulariologin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }
  
    onSubmit() {
    const body = {
      username: this.login.usuario,
      password: this.login.senha
    };
    this.usersService.login(body)
    .subscribe({
    next: (res) => {
    console.log(res);
    console.log('Usuário autenticado.')
    this.navCtrl.navigateForward('/inicio');
    },
    error: (e) => {
      console.error(e)
      console.log("Dados Enviados", body);
    }
    });
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



}