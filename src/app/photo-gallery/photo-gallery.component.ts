import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data: any[]) => {
      this.photos = data.slice(0, 10); // Display first 10 photos for simplicity
    });
  }
}
