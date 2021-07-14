import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpOAuthTitle = "Aby kontynuować, zaloguj się do Spotify.";
  signUpOAuthGoogle = "Zarejestruj się przez Google";

  signUpTitle = "Zarejestruj się za pomocą adresu e-mail";
  signUpMail = "Twój adres e-mail";
  signUpMailConfirm = "Potwierdź swój e-mail";
  signUpPassword = "Stwórz hasło";
  signUpLogin = "Jak mamy się do Ciebie zwracać?";
  signUpBirthDate = "Podaj swoją datę urodzenia";
  signUpGender = "Twoja płeć?";
  signUpOffers = "Chcę otrzymywać wiadomości i oferty od Spotify";
  signUpGenderMale = "Mężczyzna";
  signUpGenderFemale = "Kobieta";
  signUpGenderOther = "Inne";
  signUpButton = "";
  signInTitle = "";
  signInLink = "Zaloguj się";

  constructor() { }

  ngOnInit(): void {
  }

}
