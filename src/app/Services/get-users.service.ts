import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import {UserDtl} from '../Models/UserDtl';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({
    "Content-Type":"application/json"
  })
};

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
    return this._UserData.get("https://localhost:44383/api/blockuser/"+id);
  }

  //Unblock Users
  public Unblock(id:any)
  {
    return this._UserData.get("https://localhost:44383/api/unblockuser/"+id);
  }

  //login
  public login(loginData)
  {
    return this._UserData.post("https://localhost:44383/api/login",loginData,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }

  //Register
  public Register(signUpData)
  {
    console.log(signUpData);
    return this._UserData.post("https://localhost:44383/api/register",signUpData,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }

//Skill Here 

  //getAllSkills

  public AllSkills()
  {
    return this._UserData.get("https://localhost:44383/api/getskills");
  }

  //DeleteSkill

  public DeleteSkill(id)
  {
    return this._UserData.get("https://localhost:44383/api/delteteskill/"+id);
  }

  //AddSkill
  public AddSkill(data)
  {
    return this._UserData.post("https://localhost:44383/api/addskill",data,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));;
  }

}
