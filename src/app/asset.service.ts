import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from './Asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }
  createAsset(asset : Asset){
    const body = JSON.stringify(asset)
    const headers = { 'content-type': 'application/json'}
    this.http.post("http://localhost:8080/asset/record",body,{'headers':headers})
    .subscribe(respose=>{console.log(respose)})
  }
  getAsset():Observable<Asset[]>{
    return this.http.get<Asset[]>("http://localhost:8080/asset/records")
  }
  getAssetById(id:Number){
    return this.http.get<Asset>(`http://localhost:8080/asset/record/${id}`)
  }
  updateAsset(asset:Asset){
    const body = JSON.stringify(asset)
    const headers = { 'content-type': 'application/json'}
    this.http.post("http://localhost:8080/asset/record",body,{'headers':headers})
    .subscribe(respose=>{console.log(respose)})
  }
}
