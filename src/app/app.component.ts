import { Component } from '@angular/core';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhotoGalleryComponent],
  template: '<app-photo-gallery></app-photo-gallery>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
