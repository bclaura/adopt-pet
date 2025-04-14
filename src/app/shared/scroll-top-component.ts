import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button *ngIf="showButton" class="scroll-top-button" (click)="scrollToTop()">
      <i class="fas fa-chevron-up"></i>
    </button>
  `,
  styles: [`
.scroll-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  background-color: #ffc107;
  color: #212529;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-button:hover {
  background-color: #e0a800;
}
  `]
})
export class ScrollTopComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
