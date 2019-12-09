import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { GitSService} from '../git-s.service';
import { Profile } from 'selenium-webdriver/firefox';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
profile: any;
repos: any;
username: string;

  constructor(private http: HttpClient, private service: GitSService) {

   }

   findAccount() {
     this.service.updateProfile(this.username);
     this.service.getProfile().subscribe( Prof => {
      console.log(Prof);
      this.profile = Prof;
    });
     this.service.getRepos().subscribe(repos => {
       this.repos = repos;
       console.log(repos);
    });
   }
  ngOnInit() {


    }
  }


