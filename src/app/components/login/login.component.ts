import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: Boolean = false;
  model: User;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.model = new User();
  }

  onSubmit(): void {
    if(this.model.email && this.model.password){
      this.authService.login(this.model.email, this.model.password);
      this.router.navigate(['/recipes']);
    }
  }
}
