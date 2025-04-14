import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css'
})

export class PetDetailComponent {
  pet: Pet | undefined;
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.pet = PETS.find(p => p.id === id!);
  }

  @ViewChild('adoptModal', { static: false }) adoptModal!: ElementRef;

openAdoptModal() {
  const modalEl = document.getElementById('adoptModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

showSuccessMessage = false;

submitForm(form: any) {
  if (form.valid) {
    this.showSuccessMessage = true;

    setTimeout(() => {
      this.showSuccessMessage = false;
      const modal = bootstrap.Modal.getInstance(document.getElementById('adoptModal'));
      modal.hide();
    }, 10000); 

    form.reset();
  }
}

}

interface Pet {
  id: string;
  nume: string;
  specie: string;
  varsta: string;
  sex: string;
  castrat: boolean;
  marime: string;
  greutate: string;
  culoare: string;
  rasa: string;
  imagine: string;
}

const PETS: Pet[] = [
  {
    id: '1',
    nume: 'Luna',
    specie: 'Câine',
    varsta: '6 luni',
    sex: 'Femelă',
    castrat: true,
    marime: 'Mediu (pui)',
    greutate: '8 kg',
    culoare: 'Bej / Galben deschis',
    rasa: 'Metis (posibil Labrador Mix)',
    imagine: 'assets/images/dog1.jpg'
  },
  {
    id: '3',
    nume: 'Max',
    specie: 'Câine',
    varsta: '3 ani',
    sex: 'Mascul',
    castrat: true,
    marime: 'Mediu',
    greutate: '18 kg',
    culoare: 'Bej / Maroniu deschis',
    rasa: 'Metis',
    imagine: 'assets/images/dog2.jpg'
  },
  {
    id: '6',
    nume: 'Bunny',
    specie: 'Pisică',
    varsta: '2 ani',
    sex: 'Femelă',
    castrat: true,
    marime: 'Mediu',
    greutate: '4 kg',
    culoare: 'Alb cu gri/negru tigrat (Bicolor)',
    rasa: 'Pisică domestică / Europeană',
    imagine: 'assets/images/cat1.jpeg'
  },
  {
    id: '8',
    nume: 'Tasha',
    specie: 'Iepure',
    varsta: '1 an',
    sex: 'Femelă',
    castrat: false,
    marime: 'Mic spre Mediu',
    greutate: '1.5 kg',
    culoare: 'Gri / Cenușiu',
    rasa: 'Iepure domestic',
    imagine: 'assets/images/rabbit1.jpeg'
  },
  {
    id: '10',
    nume: 'Mimi',
    specie: 'Pisică',
    varsta: '1 an și 6 luni',
    sex: 'Femelă',
    castrat: true,
    marime: 'Mediu',
    greutate: '3.5 kg',
    culoare: 'Gri / Maro tigrat (Tabby)',
    rasa: 'Pisică domestică / Europeană (Tabby)',
    imagine: 'assets/images/cat5.jpeg'
  },
  {
    id: '11',
    nume: 'Snow',
    specie: 'Iepure',
    varsta: '2 ani',
    sex: 'Mascul',
    castrat: false,
    marime: 'Mediu spre Mare',
    greutate: '3 kg',
    culoare: 'Alb',
    rasa: 'Iepure domestic (posibil Urias Alb mix)',
    imagine: 'assets/images/rabbit4.jpeg'
  },
  {
    id: '12',
    nume: 'Rocky',
    specie: 'Câine',
    varsta: '2 ani',
    sex: 'Mascul',
    castrat: true,
    marime: 'Mediu spre Mare',
    greutate: '22 kg',
    culoare: 'Maro cu negru',
    rasa: 'Metis (posibil tip ciobănesc)',
    imagine: 'assets/images/dog4.jpeg'
  },
  {
    id: '14',
    nume: 'Nala',
    specie: 'Pisică',
    varsta: '4 ani',
    sex: 'Femelă',
    castrat: true,
    marime: 'Mediu',
    greutate: '4.5 kg',
    culoare: 'Portocaliu tigrat (Orange Tabby)',
    rasa: 'Pisică domestică / Europeană',
    imagine: 'assets/images/cat4.jpeg'
  },
  {
    id: '15',
    nume: 'Cotton',
    specie: 'Iepure',
    varsta: '1 an și 6 luni',
    sex: 'Mascul',
    castrat: false,
    marime: 'Mediu',
    greutate: '2.1 kg',
    culoare: 'Gri deschis / Lila',
    rasa: 'Iepure domestic',
    imagine: 'assets/images/rabbit3.jpeg'
  },
  {
    id: '16',
    nume: 'Bruno',
    specie: 'Câine',
    varsta: '5 ani',
    sex: 'Mascul',
    castrat: true,
    marime: 'Mediu',
    greutate: '19 kg',
    culoare: 'Bej / Maroniu deschis',
    rasa: 'Metis',
    imagine: 'assets/images/dog3.jpeg'
  },
  {
    id: '17',
    nume: 'Mochi',
    specie: 'Pisică',
    varsta: '2 ani',
    sex: 'Femelă',
    castrat: true,
    marime: 'Mediu',
    greutate: '3.8 kg',
    culoare: 'Alb cu gri/maro tigrat (Bicolor Tabby)',
    rasa: 'Pisică domestică / Europeană',
    imagine: 'assets/images/cat2.jpeg'
  },
  {
    id: '18',
    nume: 'Daisy',
    specie: 'Iepure',
    varsta: '10 luni',
    sex: 'Femelă',
    castrat: false,
    marime: 'Mediu',
    greutate: '1.9 kg',
    culoare: 'Gri închis / Negru',
    rasa: 'Iepure domestic (posibil Lionhead mix)',
    imagine: 'assets/images/rabbit2.jpeg'
  }
];




