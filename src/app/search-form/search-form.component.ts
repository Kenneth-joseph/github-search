import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Gitprofile } from '../gitprofile';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

profile: Gitprofile[];
  constructor(private http: HttpClientModule) { }

  ngOnInit() {
    interface ApiResponse{
      
    }
  }

}
