import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataApiService {
  constructor(private httpClient: HttpClient) { }
  

  getData():Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   this.httpClient.get()//Add 'implements OnInit' to the class.
  



// }



}
