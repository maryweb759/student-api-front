export class Student {
    id:number;
    fullName: String;
    gender: string; 
    age: string;
    phone: string; 
    address: string;
    dateCreated!: Date; 
    dateUpdated!: Date; 

    
        constructor(id: number, fullName: string, gender: string, age: string, phone: string, address: string) {
            this.id = id;
            this.fullName = fullName;
            this.gender = gender;
            this.age = age;
            this.address = address;
            this.phone = phone;
           
            this.address = address;
            // this.dateCreated = dateCreated;
            // this.dateUpdated = dateUpdated;
          }
        }
export class StudentPojo {
  count : number;
  student: Student[]
}