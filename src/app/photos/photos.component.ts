import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Photo } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$: Photo[];
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    return this.dataService.getPhotos()
     .subscribe(photos =>  this.photos$ = photos);
  }

}
