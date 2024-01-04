import { Component, OnInit } from '@angular/core';
import { Asset } from '../Asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit {
  assets!:Asset[];
  constructor(private service:AssetService){

  }
  ngOnInit(): void {
    this.service.getAsset().subscribe(response => {
      this.assets = response;
      console.log(response);
    }
    )
  }

  
}
