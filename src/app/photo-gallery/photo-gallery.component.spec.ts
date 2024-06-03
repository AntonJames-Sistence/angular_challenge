import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoService } from '../photo.service';
import { of } from 'rxjs';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;
  let photoService: PhotoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGalleryComponent],
      imports: [HttpClientTestingModule],
      providers: [PhotoService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotoService);
  });

  it('should display photos', () => {
    const dummyPhotos = [
      { id: 1, title: 'Photo 1', thumbnailUrl: 'https://via.placeholder.com/150/92c952' },
      // Add more dummy photos here
    ];
    spyOn(photoService, 'getPhotos').and.returnValue(of(dummyPhotos));

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.photo-item').length).toBe(1);
    expect(compiled.querySelector('.photo-item p').textContent).toContain('Photo 1');
  });
});
