import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = "Aby kontynuować, zaloguj się do Musiva"
  loginTitle = "Adres e-mail lub nazwa użytkownika"
  passwordTitle = "Hasło"
  passwordReset = "Nie pamiętasz hasła?"
  rememberMe = "Zapamiętaj mnie"
  signIn = "Zaloguj się"
  signUpTitle = "Nie masz jeszcze konta?"
  signUp = "Zarejestruj się w Musiva"

  constructor() { }

  ngOnInit(): void {}

  onRememberMe($event: boolean) {}
}
