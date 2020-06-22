import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: String;
  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if(this.email){
      
      this.userService.create(new User(this.email)).subscribe(user => {
        alert(`Usuário criado: Sua senha é ${user.password}`);
        this.router.navigate(['/login']);
      })
    }
  }
}
