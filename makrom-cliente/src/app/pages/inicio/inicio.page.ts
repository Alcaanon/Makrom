import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  users!: Observable<any>;

  constructor(
    private usersService: UsuarioService,
  ) { }

  ngOnInit() {
    this.users= this.usersService.findAll();
  }
}
