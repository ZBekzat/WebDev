import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly albumService = inject(AlbumService);

  albumId = 0;
  photos: Photo[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (Number.isNaN(id)) {
      this.errorMessage = 'Invalid album id.';
      this.isLoading = false;
      return;
    }

    this.albumId = id;

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load album photos.';
        this.isLoading = false;
      }
    });
  }
}
