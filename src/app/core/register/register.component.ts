import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpOAuthTitle = "Zarejestruj się za darmo i zacznij słuchać.";
  signUpOAuthGoogle = "Kontynuuj z Google";

  signUpTitle = "Zarejestruj się za pomocą adresu e-mail";
  signUpMail = "Twój adres e-mail";
  signUpMailConfirm = "Potwierdź swój e-mail";
  signUpPassword = "Stwórz hasło";
  signUpLogin = "Jak mamy się do Ciebie zwracać?";
  signUpBirthDate = "Podaj swoją datę urodzenia";
  signUpBirthDateDay = "Dzień";
  signUpBirthDateDayShort = "DD";
  signUpBirthDateMonth = "Miesiąc";
  signUpBirthDateYear = "Rok";
  signUpBirthDateYearShort = "YYYY";
  signUpGender = "Twoja płeć?";
  signUpOffers = "Chcę otrzymywać wiadomości i oferty od Musiva";
  signUpGenderMale = "Mężczyzna";
  signUpGenderFemale = "Kobieta";
  signUpGenderOther = "Osoba niebinarna";
  signUpButton = "Zarejestruj się";
  signInTitle = "Masz już konto?";
  signInLink = "Zaloguj się.";

  constructor() { }

  ngOnInit(): void {
  }

  onSignUpOffer() {}
}
