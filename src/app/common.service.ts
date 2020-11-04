import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private _http: HttpClient) { }
  createLink(linkInfo){
    return this._http.post("http://localhost:3000/links",linkInfo);
  }
  getAllLinks(){
    return this._http.get("http://localhost:3000/links");
  }
  updateLink(link){
    return this._http.put("http://localhost:3000/links/" +link.id, link);
  }
  deleteLink(link){
    return this._http.delete("http://localhost:3000/links/" +link.id);
  }

}
