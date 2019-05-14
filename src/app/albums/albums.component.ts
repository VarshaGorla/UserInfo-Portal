import { Component, OnInit, Renderer2} from '@angular/core';
import { Album } from '../user.model';
import { Photo } from '../user.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  
})
export class AlbumsComponent implements OnInit {
  id: any; 
  divElement: any;
  mainDiv: any;
  show:boolean = false;
  buttonName:any = 'Show';
  photos: Photo[];
  albums$: Album[];
  
  
  constructor(private dataService: DataService, private renderer:Renderer2) { }
  
  
  ngOnInit() {
    
    return this.dataService.getAlbums()
     .subscribe(data => this.albums$ = data);
    
    
    }
    
  openAlbums(event:any) {
    this.show = !this.show;

    
    this.id = event.target.id;
    return this.dataService.getAlbumPhotos(this.id)
     .subscribe(data => { this.photos = data
        let button = document.getElementById(this.id);
        
        this.mainDiv = document.getElementById("albumPhotos_"+this.id)
        // CHANGE THE NAME OF THE BUTTON.
        if(this.show)  {
          this.buttonName = "Hide";
          for (let photo of this.photos){
            this.divElement = this.renderer.createElement('div');
            let img = this.renderer.createElement('img');
            img.src = photo.thumbnailUrl;
            let innerDiv = this.renderer.createElement('div');
            let title = this.renderer.createElement('p');
            const titleText = this.renderer.createText(photo.title);
            this.renderer.appendChild(title, titleText);
            this.renderer.appendChild(innerDiv, title);
            this.renderer.appendChild(this.divElement, img);
            this.renderer.appendChild(this.divElement, innerDiv);
            this.renderer.appendChild(this.mainDiv, this.divElement );
          }  
          
          } else {
            this.buttonName = "Show";
          }

      });
  }
}
