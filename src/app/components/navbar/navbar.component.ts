import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  setActiveLink(event: any) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }
}
