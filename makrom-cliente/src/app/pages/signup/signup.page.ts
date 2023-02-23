import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/cliente';
import { Usuario } from 'src/app/interfaces/usuario';
import { ClienteService } from 'src/app/services/cliente.service';
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
    private clienteService: ClienteService,
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


cliente: Cliente = {
  
 
  name: "",
  email: "",
  phone: "",
  mobilePhone: "", 
  cpfCnpj: "",
  postalCode: "",
  address: "",
  addressNumber: "",
  complement: "",
  province: "",
  city: "",
  state: "",
  externalReference: "",
  notificationDisabled: false,
  additionalEmails: "",
  municipalInscription: "",
  stateInscription: "",
  observations: "",
}

usuario: Usuario = {
  id: 0,
  email: "",
  senha: ""
}



formulario!: FormGroup;

validaForm(){
  this.formulario = this.formBuilder.group({
    
    name: ['', [Validators.required]],
    cpfCnpj: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    mobilePhone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    addressNumber: ['', [Validators.required]],
    complement: ['', [Validators.required]],
    province: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    postalCode: ['', [Validators.required]],
    externalReference: ['', [Validators.required]],
    additionalEmails: ['', [Validators.required]],
    municipalInscription: ['', [Validators.required]],
    stateInscription: ['', [Validators.required]],
    observations: ['', [Validators.required]],
    groupname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  });
}

cadastro(): void{
  const data = {
  email: this.usuario.email,
  senha: this.usuario.senha
  };
  this.usuarioService.create(data).subscribe({next: (res) => 
  {
    console.log(res);
    console.log("Usuário cadastrado com sucesso")
  },
  error: (e) => console.error(e)
  });
  const datacliente = {
    name: this.cliente.name,
    email: this.cliente.email,
    phone: this.cliente.phone,
    mobilePhone: this.cliente.mobilePhone, 
    cpfCnpj: this.cliente.cpfCnpj,
    postalCode: this.cliente.postalCode,
    address: this.cliente.address,
    addressNumber: this.cliente.addressNumber,
    complement: this.cliente.complement,
    province: this.cliente.province,
    city: this.cliente.city,
    state: this.cliente.state,
  };
  this.clienteService.create(datacliente).subscribe({next: (rescli) => 
    {
      console.log(rescli);
      console.log("Cliente cadastrado com sucesso")
      this.navCtrl.navigateForward('/login');
    },
    error: (e) => console.error(e)
    });
}

}
