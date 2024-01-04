import { Component, OnInit } from '@angular/core';
import { Asset } from '../Asset';
import { AssetService } from '../asset.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {
  assetUpdate!: FormGroup;
  asset!: Asset;
  sites = ['India', 'China', 'America', 'Columbia', 'Europe'];
  status = ['Active', 'Inactive'];
  locations = ['India', 'China', 'America', 'Columbia', 'Europe']
  constructor(private service: AssetService,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.service.getAssetById(params['id']).subscribe(
        response => {
          this.asset = response;
          console.log(this.asset);
        }
      );
    })
  }

  ngOnInit(): void {
    this.assetUpdate = new FormGroup(
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
    console.log(this.assetUpdate.value);
  }
  onSubmit() {
    this.asset = <Asset>this.assetUpdate.value;
    console.log(this.assetUpdate.value);
    this.service.updateAsset(this.asset);
  }
}
