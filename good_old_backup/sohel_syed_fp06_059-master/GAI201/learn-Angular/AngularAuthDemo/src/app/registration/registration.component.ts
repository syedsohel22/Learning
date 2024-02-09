// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = { username: '', email: '', password: '' };

  constructor(private http: HttpClient) {}

  onRegister() {
    this.http
      .post('http://localhost:3000/users', this.user)
      .subscribe((response) => {
        console.log('User registered:', response);
        // Clear the form after successful registration
        this.user = { username: '', email: '', password: '' };
      });
  }
}
