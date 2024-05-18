import { Component } from '@angular/core';
import { AuthorService } from '../../entities/author/author.service';


@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})

export class ImageUploadComponent {
  selectedFile: File | null = null;

  constructor(private authorService: AuthorService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(authorId: number): void {
    if (this.selectedFile) {
      this.authorService.uploadImage(authorId, this.selectedFile).subscribe(
          () => {
            console.log('Image uploaded successfully');
            // Optionally, you can handle success actions here
          },
          error => {
            console.error('Error uploading image:', error);
            // Optionally, you can handle error actions here
          }
      );
    }
  }
}

