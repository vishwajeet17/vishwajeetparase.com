import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profilePicture: string = 'assets/profilePicture.jpg';
  amdocsLogo: string = 'assets/amdocsLogo.png';
}
