import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SpaceValidator } from 'src/app/model/space-validator';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  studentForm!: FormGroup;
  id!: any ; 
  errorMessage: String;
  myStudent: Student = new Student(0, "", "", "", "", "");
  constructor(private formBuilder:FormBuilder, private route:Router, 
    private studentService:StudentService, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.activeroute.snapshot.paramMap.get('id');
       //alert(this.id)

    if(this.id != null) {
     
      this.studentService.getStudentById(this.id).subscribe(
        Response =>{
          this.myStudent = Response;

          this.studentForm = this.formBuilder.group({
            student: this.formBuilder.group({
               fullName: [this.myStudent.fullName, [Validators.required, Validators.minLength(6), SpaceValidator.elimaneSpace]],
               age: [this.myStudent.age, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[0-9]\d*$/), SpaceValidator.elimaneSpace]], 
               phone: [this.myStudent.phone, [Validators.required, Validators.maxLength(11), Validators.pattern(/^[0-9]\d*$/), SpaceValidator.elimaneSpace ]],
               address: [this.myStudent.address, [Validators.required, SpaceValidator.elimaneSpace]],
               gender: [this.myStudent.gender, []]
            })
          })
        }
      )
        
       }
     // console.log(this.myStudent);
      
   
      this.studentForm = this.formBuilder.group({
        student: this.formBuilder.group({
           fullName: new FormControl("", [Validators.required, Validators.minLength(6), SpaceValidator.elimaneSpace]),
           age:  new FormControl("", [Validators.required, Validators.maxLength(2), Validators.pattern(/^[0-9]\d*$/), SpaceValidator.elimaneSpace]), 
           phone:  new FormControl("", [Validators.required, Validators.maxLength(11), Validators.pattern(/^[0-9]\d*$/), SpaceValidator.elimaneSpace ]),
           address: new FormControl("", [Validators.required, SpaceValidator.elimaneSpace]),
           gender: ['']
        })
      })
    
   
  }

  get fullName() {
    return this.studentForm.get('student.fullName');
  }

  get age() {
    return this.studentForm.get('student.age');
    }
    get phone() {
      return this.studentForm.get('student.phone');
    }
  
    get address() {
      return this.studentForm.get('student.address');
      }

  getStudentName() {
    return this.studentForm.get("student")?.value.fullName;
  }
  getAge() {
    return this.studentForm.get("student")?.value.age;
  }
  getPhone() {
    return this.studentForm.get("student")?.value.phone;
  }
  getAddress() {
    return this.studentForm.get("student")?.value.address;
  } 
  getGender() {
    return this.studentForm.get("student")?.value.gender;
  }

  onAdd() {
    const st = new Student(this.id, this.getStudentName(), this.getGender(), this.getAge(), this.getPhone(), this.getAddress());
    if(this.studentForm.invalid) {
     this.studentForm.markAllAsTouched();
    } else {
    if(this.id == null) {
     this.studentService.addStudent(st).subscribe(
      response => {
      this.route.navigateByUrl("students");

      }, error => {
        this.errorMessage = "Full Name alerdy Exist ";
        this.timeOutMessage();
      }
      
    ) 
    } else {
      this.studentService.updateStudent(st, this.id).subscribe(
        response => {
          this.route.navigateByUrl("student");
        }
      )
    }
  }
   
  } 

  timeOutMessage() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

}
