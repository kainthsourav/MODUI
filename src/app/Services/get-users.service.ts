import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {login} from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private _UserData:HttpClient) { }

  //show all users
  public GetAll()
  {
    return this._UserData.get("https://localhost:44383/api/getuser");
  }

  //Block User
  public Block(id:any)
  {
    return this._UserData.get("https://localhost:44383/api/blockuser/",id);
  }

  //Unblock Users
  public Unblock(id:any)
  {
    return this._UserData.get("https://localhost:44383/api/unblockuser/",id);
  }

  //login
  public login(loginData)
  {
    return this._UserData.get("https://localhost:44383/api/login",loginData);
  
  }
}
