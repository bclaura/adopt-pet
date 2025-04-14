import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent {
  searchTerm: string = '';
  previewImage: string | null = null;

  constructor(private router: Router) {}

  showPreview(img: string) {
    if (window.innerWidth > 768) {
      this.previewImage = img;
    }
  }
  
  hidePreview() {
    this.previewImage = null;
  }
  
  goToDetail(id: number) {
    this.router.navigate(['/adopta', id]);
  }

  animals = [
    {
      id: 1,
      image: 'assets/images/dog1.jpg',
      name: 'Luna',
      species: 'Câine',
      breed: 'Metis (posibil Labrador Mix)',
      age: '6 luni',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 2,
      image: 'assets/images/dog6.jpeg',
      name: 'Rex',
      species: 'Câine',
      breed: 'Metis (Ciobănesc German Mix)',
      age: '4 ani',
      sex: 'Mascul',
      status: 'Adoptat'
    },
    {
      id: 3,
      image: 'assets/images/dog2.jpg',
      name: 'Max',
      species: 'Câine',
      breed: 'Metis',
      age: '3 ani',
      sex: 'Mascul',
      status: 'Disponibil'
    },
    {
      id: 4,
      image: 'assets/images/cat6.jpeg',
      name: 'Cleo',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană',
      age: '3 ani',
      sex: 'Femelă',
      status: 'Adoptat'
    },
    {
      id: 5,
      image: 'assets/images/cat7.jpeg',
      name: 'Oscar',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană (posibil Albastru de Rusia mix)',
      age: '5 ani',
      sex: 'Mascul',
      status: 'Adoptat'
    },
    {
      id: 6,
      image: 'assets/images/cat1.jpeg',
      name: 'Bunny',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană',
      age: '2 ani',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 7,
      image: 'assets/images/dog7.jpeg',
      name: 'Bella',
      species: 'Câine',
      breed: 'Metis (Terrier Mix)',
      age: '1 an și 6 luni',
      sex: 'Femelă',
      status: 'Adoptat'
    },
    {
      id: 8,
      image: 'assets/images/rabbit1.jpeg',
      name: 'Tasha',
      species: 'Iepure',
      breed: 'Iepure domestic',
      age: '1 an',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 9,
      image: 'assets/images/cat8.jpeg',
      name: 'Sushi',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană',
      age: '1 an',
      sex: 'Femelă',
      status: 'Adoptat'
    },
    {
      id: 10,
      image: 'assets/images/cat5.jpeg',
      name: 'Mimi',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană (Tabby)',
      age: '1 an și 6 luni',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 11,
      image: 'assets/images/rabbit4.jpeg',
      name: 'Snow',
      species: 'Iepure',
      breed: 'Iepure domestic (posibil Urias Alb mix)',
      age: '2 ani',
      sex: 'Mascul',
      status: 'Disponibil'
    },
    {
      id: 12,
      image: 'assets/images/dog4.jpeg',
      name: 'Rocky',
      species: 'Câine',
      breed: 'Metis (posibil tip ciobănesc)',
      age: '2 ani',
      sex: 'Mascul',
      status: 'Disponibil'
    },
    {
      id: 13,
      image: 'assets/images/rabbit5.jpeg',
      name: 'Thumper',
      species: 'Iepure',
      breed: 'Iepure pitic olandez (Netherland Dwarf) / Metis',
      age: '2 ani',
      sex: 'Mascul',
      status: 'Adoptat'
    },
    {
      id: 14,
      image: 'assets/images/cat4.jpeg',
      name: 'Nala',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană',
      age: '4 ani',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 15,
      image: 'assets/images/rabbit3.jpeg',
      name: 'Cotton',
      species: 'Iepure',
      breed: 'Iepure domestic',
      age: '1 an și 6 luni',
      sex: 'Mascul',
      status: 'Disponibil'
    },
    {
      id: 16,
      image: 'assets/images/dog3.jpeg',
      name: 'Bruno',
      species: 'Câine',
      breed: 'Metis',
      age: '5 ani',
      sex: 'Mascul',
      status: 'Disponibil'
    },
    {
      id: 17,
      image: 'assets/images/cat2.jpeg',
      name: 'Mochi',
      species: 'Pisică',
      breed: 'Pisică domestică / Europeană',
      age: '2 ani',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 18,
      image: 'assets/images/rabbit2.jpeg',
      name: 'Daisy',
      species: 'Iepure',
      breed: 'Iepure domestic (posibil Lionhead mix)',
      age: '10 luni',
      sex: 'Femelă',
      status: 'Disponibil'
    },
    {
      id: 19,
      image: 'assets/images/dog8.jpeg',
      name: 'Thor',
      species: 'Câine',
      breed: 'Metis (Amstaff Mix)',
      age: '6 ani',
      sex: 'Mascul',
      status: 'Adoptat'
    }
  ];

  filteredAnimals() {
    if (!this.searchTerm) return this.animals;
  
    const term = this.normalizeString(this.searchTerm);
  
    return this.animals.filter(animal =>
      this.normalizeString(animal.name).includes(term) ||
      this.normalizeString(animal.species).includes(term) ||
      this.normalizeString(animal.breed).includes(term)
    );
  }
  

  clearSearch() {
    this.searchTerm = '';
  }

  normalizeString(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  
}
