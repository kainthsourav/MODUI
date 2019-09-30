import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private _UserData:HttpClient) { }
  public GetAll()
  {
    return this._UserData.get("https://localhost:44383/api/getuser");
  }
}
