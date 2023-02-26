


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  
  selectedOption: string = '';
 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    public navCtrl: NavController


    ) {}

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
  this.validaForm();
}




usuario: Usuario = {
  id: 0,
  
  name: "",
  
  bday: null,
  genre: "",
  cpfcnpj: 0,
  homenumber: 0,
  phonenumber: 0,

  cep: 0,
    address: "",
    number: 0,
    nhood: "",
    city: "",
    province: "",
    state: "",

  usuario: "",
  email: "",
  senha: ""
}



formulario!: FormGroup;

validaForm(){
  this.formulario = this.formBuilder.group({
    
    nome: ['', [Validators.required]],
    sobrenome: ['', [Validators.required]],

    nascimento: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    cpfcnpj: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    telefonefixo: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    

    cidade: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    
    estado: ['', [Validators.required]],
    
    usuario: ['', [Validators.required]],
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  });
}

cadastro(): void{
  const data = {

  nome: this.usuario.name,
 
  nascimento: this.usuario.bday,
  cpfcnpj: this.usuario.cpfcnpj,
  telefone: this.usuario.phonenumber,
  telefonefixo: this.usuario.homenumber,
  cep: this.usuario.cep,
  endereco: this.usuario.address,
  numero: this.usuario.number,
  
  cidade: this.usuario.city,
  bairro: this.usuario.nhood,
  estado: this.usuario.state,

  usuario: this.usuario.usuario,
  email: this.usuario.email,
  senha: this.usuario.senha
  };
  this.usuarioService.create(data)
  .subscribe({
  next: (res) => {
  console.log(res);
  console.log("Usuário cadastrado com sucesso")
  this.navCtrl.navigateForward('/login');
  },
  error: (e) => console.error(e)
  });
}

}
