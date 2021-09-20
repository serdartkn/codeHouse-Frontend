import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class UserService 
{
  apiUrl = 'http://localhost:8080/api/users/';

  constructor(private httpClient: HttpClient) { }

  add(user:User):Observable<ResponseModel>
  {
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  update(user:User):Observable<ResponseModel>
  {
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  delete(user:User):Observable<ResponseModel>
  {
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  findUsers():Observable<ListResponseModel<User>>
  {
    let newPath = this.apiUrl + "findAll";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  findUserById(Id:number):Observable<ListResponseModel<User>>
  {
    let newPath=this.apiUrl + "findById?Id=" + Id;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  findUserByPhone(Phone:string):Observable<ListResponseModel<User>>
  {
    let newPath=this.apiUrl + "findByPhone?Phone=" + Phone;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
}