import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Student, StudentPojo } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService { 
  //private url = 'http://localhost:8080/api/students';
  private url = 'http://localhost:8080/system/students';

  constructor(private httpClient: HttpClient) { }

   header = new HttpHeaders({
    Authorization:  this.basicUsernamePasswordAuthentication()
  })

  // getStudent(page:number, size:number):Observable<Student[]> {
  // // return this.httpClient.get<Student[]>(this.url + `?page=${page}&size=${size}`, {headers: this.header}).pipe(
  //   return this.httpClient.get<Student[]>(this.url + `?page=${page}&size=${size}`).pipe(

  //    map(response => response)
    
  //  )
  // } 
  
  getStudent(page:number, size:number):Observable<StudentPojo> {
    // return this.httpClient.get<Student[]>(this.url + `?page=${page}&size=${size}`, {headers: this.header}).pipe(
      return this.httpClient.get<StudentPojo>(this.url + `?page=${page}&size=${size}`).pipe(
  
       map(response => response)
      
     )
    } 

  findSudentByfullname(name: String, page:number, size:number):Observable<StudentPojo> {
    return this.httpClient.get<StudentPojo>(this.url + `/searchName?fullName=${name}&page=${page}&size=${size}`).pipe(
      map(response => response)
    )
  }
  
  deleteStudent(id: number) {
    return this.httpClient.delete(this.url + `?id=${id}`)
  }
  
  addStudent(student: Student) {
   return this.httpClient.post(this.url, student);
  } 

  getStudentById(id: number):Observable<Student> {
    return this.httpClient.get<Student>(`http://localhost:8080/system/student?id=${id}`).pipe(
      map(response => response 
      ) 
    )
  } 

  updateStudent(st:Student, id:number) {
   return this.httpClient.put(this.url + `?id=${id}`, st)
  } 

  getStudentCount():Observable<number> {
    return this.httpClient.get<number>(this.url + `/count`).pipe(
      map(response => response)
     
    )
   }  

   getStudentFullnameCount(fullName:string):Observable<number> {
    return this.httpClient.get<number>(this.url + `/countbyFullname?fullname=${fullName}`).pipe(
      map(response => response)
     
    )
   }  

   basicUsernamePasswordAuthentication() {
     let userName = 'meriem';
     let password =  'meriem'; 
     let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);  // convert to base 64
     return basicAuthHeaderString;
   }




//   getStudent():Observable<Student[]> {
//     return this.httpClient.get<getResponseStudent>(this.url).pipe(
//       map(response =>
       
//         response._embedded.students)
     
//     )
//    } 
 } 

// interface getResponseStudent {
//   _embedded: {
//    students: Student[];
//   }
// } 



