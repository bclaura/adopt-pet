import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  availableAnimals = [
    {
      id: '1',
      name: 'Luna',
      species: 'Câine',
      breed: 'Metis (posibil Labrador Mix)',
      image: 'assets/images/dog1.jpg'
    },
    {
      id: '17',
      name: 'Mochi',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană',
      image: 'assets/images/cat2.jpeg'
    },
    {
      id: '15',
      name: 'Cotton',
      species: 'Iepure',
      breed: 'Iepure domestic',
      image: 'assets/images/rabbit3.jpeg'
    },
    {
      id: '16',
      name: 'Bruno',
      species: 'Câine',
      breed: 'Metis',
      image: 'assets/images/dog3.jpeg'
    }
  ];
  
}
