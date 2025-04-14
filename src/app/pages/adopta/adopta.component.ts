import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adopta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './adopta.component.html',
  styleUrl: './adopta.component.css'
})
export class AdoptaComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }


  animalsList = [
    { id: 1, name: 'Luna', specie: 'Câine', image: 'assets/images/dog1.jpg' },
    { id: 3, name: 'Max', specie: 'Câine', image: 'assets/images/dog2.jpg' },
    { id: 6, name: 'Bunny', specie: 'Pisică', image: 'assets/images/cat1.jpeg' },
    { id: 8, name: 'Tasha', specie: 'Iepure', image: 'assets/images/rabbit1.jpeg' },
    { id: 10, name: 'Mimi', specie: 'Pisică', image: 'assets/images/cat5.jpeg' },
    { id: 11, name: 'Snow', specie: 'Iepure', image: 'assets/images/rabbit4.jpeg' },
    { id: 12, name: 'Rocky', specie: 'Câine', image: 'assets/images/dog4.jpeg' },
    { id: 14, name: 'Nala', specie: 'Pisică', image: 'assets/images/cat4.jpeg' },
    { id: 15, name: 'Cotton', specie: 'Iepure', image: 'assets/images/rabbit3.jpeg' },
    { id: 16, name: 'Bruno', specie: 'Câine', image: 'assets/images/dog3.jpeg' },
    { id: 17, name: 'Mochi', specie: 'Pisică', image: 'assets/images/cat2.jpeg' },
    { id: 18, name: 'Daisy', specie: 'Iepure', image: 'assets/images/rabbit2.jpeg' },
  ];
}

