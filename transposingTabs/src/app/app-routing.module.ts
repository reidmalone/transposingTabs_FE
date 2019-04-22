import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { TabsComponent } from './views/tabs/tabs.component';
import { ChordsComponent } from './views/chords/chords.component';
import { InputComponent } from './views/input/input.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent , data: { animation: 'isRight'}},
  { path: 'tabsview', component: TabsComponent, data: { animation: 'isRight'} },
  { path: 'chordsview', component: ChordsComponent , data: { animation: 'isLeft'}},
  { path: 'inputview', component: InputComponent , data: { animation: 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
