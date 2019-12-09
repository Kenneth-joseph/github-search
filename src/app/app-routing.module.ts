import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchFormComponent} from './search-form/search-form.component';
import {GitsearchComponent} from './gitsearch/gitsearch.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'searchForm' , component: SearchFormComponent},
  {path: '' , component: GitsearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 