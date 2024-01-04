import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssetService } from '../asset.service';
import { Asset } from '../Asset';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit{
  assetCreation!: FormGroup;
  asset!: Asset;
  sites = ['India','China','America','Columbia','Europe'];
  status = ['Active','Inactive'];
  locations = ['India','China','America','Columbia','Europe']
  constructor(private service:AssetService){}

  ngOnInit(): void {
    this.assetCreation = new FormGroup(
      {
        assetdes:new FormControl(),
        siteid:new FormControl(),
        status:new FormControl(),
        location:new FormControl(),
        equipmentcode:new FormControl(),
        created_by:new FormControl('YREDDY6'),
        installationdate : new FormControl(),
        date : new FormControl(new Date())
      }
    );
  }

  onSubmit(){
    this.asset = <Asset>this.assetCreation.value;
    this.service.createAsset(this.asset);
  }
}
