import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = []; 
  message!: string; 
  page:number = 1;
  size:number = 4;
  elemSize:number; 
  fullName:string;
  
  constructor(private studentService: StudentService, private activeroute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activeroute.paramMap.subscribe(() => {
       const result =   this.activeroute.snapshot.paramMap.has("name");
  if(result) {
    this.fullName = this.activeroute.snapshot.paramMap.get('name').toString();
   this.getStudentByFullname();
  } else {
      this.getStudent();
  }
      

  
    })
  
  //alert(result);
  // this.activeroute.snapshot.paramMap.get('id'); StudentPojo
  }

  // getStudent() {
  //   this.studentService.getStudent(this.page - 1, this.size).subscribe(
  //     data => this.students = data
  //   ); 
  //   this.getStudentCount();
  // } 
  getStudent() {
    this.studentService.getStudent(this.page - 1, this.size).subscribe(
      data =>{ 
        this.students = data.student;
        this.elemSize = data.count;
      }
    ); 
    //this.getStudentCount();
  }
  getStudentByFullname() {
   return  this.studentService.findSudentByfullname(this.fullName, this.page - 1, this.size).subscribe(
      data =>{ 
        this.students = data.student;
        this.elemSize = data.count;
       // this.getStudentByFullnameCount();
      }
    )
  } 
  getStudentByFullnameCount() {
    this.studentService.getStudentFullnameCount(this.fullName).subscribe(
      data =>   this.elemSize = data
       

    ) 
    
  } 
  deleteStudent(id: number) {
      const index = this.students.findIndex(student => student.id == id);

    this.studentService.deleteStudent(id).subscribe(
      response => {
        //this.getStudent();
        this.students.splice(index, 1)
        this.message = "student deleted successfly ";
        this.timeoutMessage() 
      }
    );
  }

  timeoutMessage() {
    setTimeout(() => {
      this.message = ""
    }, 3000);
  } 

  onPageChange() {
    const result =   this.activeroute.snapshot.paramMap.has("name");

    if(result){
      this.getStudentByFullname();
    } else {
        this.getStudent();
    }
   
  } 
  getStudentCount() {
    this.studentService.getStudentCount().subscribe(
      data => this.elemSize = data
    )
  } 

}
