import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from './user.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URI = 'http://localhost:8881/lebalma/users';
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
  createUser(login: string, password: string, numero: string, nom: string, role: string) {
    // @ts-ignore
    const postData: User = {login, password, numero, nom, role};
    this.http.post(
      this.BASE_URI, postData,
      {
        observe: 'response'
      }
    )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  // tslint:disable-next-line:typedef
  fetchUser(id: string) {
    this.http.get<{ [key: string]: User }>(this.BASE_URI + '/' + id)
      .pipe(
        map(responseDataResponse => {
          console.log(responseDataResponse);
          const postArray: User[] = [];
          for (const key in responseDataResponse) {
            if (responseDataResponse.hasOwnProperty(key)) {
              // postArray.push(responseDataResponse[key], id: key );
            }
          }
          return postArray;
        })
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  updateUser(user: User) {
    this.http.put<User>(this.BASE_URI,user).subscribe(resp=>{console.log(resp)})
  }
  
  // tslint:disable-next-line:typedef
  deletePersonnel(id: string) {
    return this.http.delete(this.BASE_URI + '/' + id, {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            //
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        }
      ));
  }
 
  fetchAllUser() {
    return this.http.get<User[]>(this.BASE_URI ).toPromise() ;
  }
}
/*

import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

import {Post} from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();
  URI = 'http://localhost:8881/lebalma/users'

  constructor(private http: HttpClient) {
  }

  createAndStorePost(login: string, password: string, numero: string, role: string, nom: string) {
    const postData: Post = {login, password, numero, role, nom};
    this.http
      .post<{ name: string }>(
        this.URI,
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }
*
  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete('https://ng-complete-guide-c56d3.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
*/