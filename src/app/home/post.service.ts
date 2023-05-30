import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(post: any){
    // post/get then <> used define the response type
    return this.http.post<{name: string}>('https://learn-angular-63c57-default-rtdb.firebaseio.com/posts.json', post)
  }

  fetchPost(){
    return this.http.get('https://learn-angular-63c57-default-rtdb.firebaseio.com/posts.json',{
      headers: new HttpHeaders({
        'customHeader': 'hello'
      })
    })
    .pipe(
      map(responseData => {
        const postArray = [];
        for (let key in responseData) {
          postArray.push({ ...responseData[key], id: key })
        }
        return postArray;
      })
    )
  }

  deletePosts(){
    return this.http.delete('https://learn-angular-63c57-default-rtdb.firebaseio.com/posts.json');
  }
}
