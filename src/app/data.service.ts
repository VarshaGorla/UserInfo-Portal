import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Photo } from './user.model';
import { Album } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  photosUrl = 'http://jsonplaceholder.typicode.com/photos';
  albumsUrl = 'http://jsonplaceholder.typicode.com/albums/';
  id: number;
  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }

  getPhotos() {
    return this._http.get<Photo[]>(this.photosUrl);
  }

  getAlbumPhotos(id:number) {
    console.log(this.photosUrl+'?albumId='+id);
    return this._http.get<Photo[]>('http://jsonplaceholder.typicode.com/photos/?albumId='+id);
    
  }

  getAlbums() {
    return this._http.get<Album[]>(this.albumsUrl);
  }

}
