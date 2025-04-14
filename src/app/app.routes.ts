import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AdoptaComponent } from './pages/adopta/adopta.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'animale', component: AnimalsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'despre', component: AboutComponent },
    { path: 'adopta', component: AdoptaComponent },
    { path: 'adopta/:id',
  loadComponent: () => import('./components/pet-detail/pet-detail.component').then(m => m.PetDetailComponent)
    }
];