import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User'
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  constructor(httpClient: HttpClient) {
    super(environment.users_service_url, httpClient);
  }
}
