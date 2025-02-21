import { Component } from '@angular/core';
import { GetDataApiService } from '../services/get-data-api.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private getDataApiService: GetDataApiService) {}

  // private getDataApiService = inject(GetDataApiService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.getDataApiService.getData().subscribe(
      //Add 'implements OnInit' to the class.
      {
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err);
        },
      }
    );
  }
}
