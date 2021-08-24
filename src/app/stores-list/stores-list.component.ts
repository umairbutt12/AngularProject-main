import { StoreServiceService } from './../shared/store-service.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {

   stores: Store[]=[];
  constructor(private storeService: StoreServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeService.fetchData().subscribe((res: Store[]) => {
      debugger
      this.stores = res;
    });
  }
  gotTo(){
    debugger
    this.router.navigate(['/QR'])

  }
}
