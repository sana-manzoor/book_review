import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL="http://localhost:3000"


  constructor(private http:HttpClient) { 
  }

  userRegister(data:any){
    return this.http.post(`${this.SERVER_URL}/add-user`,data)
  }

  userLogin(data:any){
    return this.http.post(`${this.SERVER_URL}/login`,data)

  }

  addBook(data:any){
    return this.http.post(`${this.SERVER_URL}/addbook`,data)

  }

  
  getAllBooks(){
    return this.http.get(`${this.SERVER_URL}/all-books`)
  }

  
  getBook(id:any){
    return this.http.get(`${this.SERVER_URL}/get-book/${id}`)
  }

  
  addWishApi(book:any){
    return this.http.post(`${this.SERVER_URL}/addwish`,book,this.appendTokenToHeader())
  }

  
  getWishListApi(){
    return this.http.get(`${this.SERVER_URL}/getwish`,this.appendTokenToHeader())
  }

  deleteWish(id:any){
    return this.http.delete(`${this.SERVER_URL}/delwish/${id}`,this.appendTokenToHeader())
  }

  
  detBook(id:any){
    return this.http.get(`${this.SERVER_URL}/detbook/${id}`)
  }

  updatebook(id:any,data:any){
    return this.http.put(`${this.SERVER_URL}/updateb/${id}`,data)
  }

  deletebook(id:any){
    return this.http.delete(`${this.SERVER_URL}/deleteb/${id}`)
  }

  
  getAllUsers(){
    return this.http.get(`${this.SERVER_URL}/all-users`)
  }

  addComment(id:any,data:any){
    return this.http.post(`${this.SERVER_URL}/add-comment/${id}`,data,this.appendTokenToHeader())
    
  }



  

  // function for setting header with roken
  appendTokenToHeader(){
    const token=sessionStorage.getItem('Token')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
    
  }

  
  isLoggedIn(){
    return !!sessionStorage.getItem("Token")
  }

  

}
