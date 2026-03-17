import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly albumService = inject(AlbumService);

  album: Album | null = null;
  editedTitle = '';
  isLoading = true;
  isSaving = false;
  errorMessage = '';
  successMessage = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (Number.isNaN(id)) {
      this.errorMessage = 'Invalid album id.';
      this.isLoading = false;
      return;
    }

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load album details.';
        this.isLoading = false;
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) {
      return;
    }

    const trimmedTitle = this.editedTitle.trim();
    if (!trimmedTitle) {
      this.errorMessage = 'Title cannot be empty.';
      this.successMessage = '';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const updatedAlbum: Album = {
      ...this.album,
      title: trimmedTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.isSaving = false;
        this.successMessage = 'Album title saved successfully.';
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = 'Could not save album changes.';
      }
    });
  }

  goBack(): void {
    void this.router.navigate(['/albums']);
  }
}
