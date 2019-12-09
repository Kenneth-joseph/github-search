import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Gitprofile } from './gitprofile';
@Injectable({
  providedIn: 'root'
})
export class GitSService {
 private username: string;
 private clientid = '8f8ca1b9f46944953b221e93ba90793030b38de9';
 private clientsecret = ' a0491ce4b9bad3f63000a99ef95848ea54d06694';
  constructor(private http: HttpClient) {
console.log(' service is ready ');
// tslint:disable-next-line: no-unused-expression
this.username = 'Kenneth-joseph';
   }
   getProfile() {
      // tslint:disable-next-line: max-line-length
      return this.http.get('https://api.github.com/users/' + this.username + '?client_id' + this.clientid + '&client_secret=' + this.clientsecret ).pipe(map(res => res));
   }
   getRepos() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id' + this.clientid + '&client_secret=' + this.clientsecret ).pipe(map(res => res));

   }
   updateProfile(username: string) {
      this.username = username;
   }
}
