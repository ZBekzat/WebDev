import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  private readonly albumService = inject(AlbumService);

  albums: Album[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load albums. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  deleteAlbum(albumId: number): void {
    this.albumService.deleteAlbum(albumId).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== albumId);
      },
      error: () => {
        this.errorMessage = 'Could not delete the album.';
      }
    });
  }
}
