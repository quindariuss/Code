public class Employee {

   String name; 

   int age;

   String designation;

   double salary;

   public Employee(String name) {
   
      this.name = name; 
   
   }

   public void empAge(int empAge){
   
      age = empAge;
   
   }

   public void empDesign(String empDesign){
   
      designation = empDesign;
   
   }
   
   public void empSalary(double empSalary){
   
      salary = empSalary;
   
   }

public void printEmployee(){

System.out.println("Name:" + name);

System.out.println("Age:" + age);

System.out.println("Designation:" + designation);

System.out.println("Salary:" + salary);

}

public static void main (String [] args){

//naming the objects from the consturctors 

Employee emp1= new Employee("Ricky Bobby");

Employee emp2= new Employee("Suise Que"); 

//now using the methods to insert the other varibles in the object 

emp1.empAge(35);

emp1.empDesign("Junior dicksucker");

emp1.empSalary(1000000000);

emp1.printEmployee();





}

}