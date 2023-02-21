import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIUrl = 'http://localhost:3000'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    authenticate(usuario: string, senha: string) {

        return this.http.post(APIUrl + '/usuario/login', { usuario, senha });
    }

    /*
    autenticar(usuario: string, senha: string) {
        const url = 'http://localhost:3000/usuario/login';
        const body = JSON.stringify({usuario: this.login.usuario,
                                    senha: this.login.senha});
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        this.http.post(url, body, {headers: headers}).subscribe(
            (data) => {
                console.log(data);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                } else {
                    console.log('Server-side error occured.');
                }
            }
        );
    }
    */
    
}