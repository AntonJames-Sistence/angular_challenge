import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService]
    });
    service = TestBed.inject(PhotoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch photos', () => {
    const dummyPhotos = [
      { id: 1, title: 'Photo 1', thumbnailUrl: 'https://via.placeholder.com/150/92c952' },
      // Add more dummy photos here
    ];

    service.getPhotos().subscribe(photos => {
      expect(photos.length).toBe(1);
      expect(photos).toEqual(dummyPhotos);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPhotos);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
