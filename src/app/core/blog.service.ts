import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Entry } from '../shared/models/entry.model';
import { POSTS } from 'data';


@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(
    private Http: HttpClient
  ) {}

  getAllPosts(): Observable<Entry[]> {
    return of(POSTS);
  }

  createNewPost(entry: Entry): Observable<Entry> {
    entry.id = POSTS.length;
    POSTS.push(entry);
    return of(entry);
  }
}
