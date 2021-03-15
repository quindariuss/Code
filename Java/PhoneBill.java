//Class:	CSE 1321L
//Section: 6          
//Term:	Spring
//Instructor:	Malcolm Douglas  
//Name:	Matthew Snowden
//Lab#: Lab 5

import java.util.Scanner;

public class PhoneBill
   {


   public static void main(String[] args) {
   // Create the scanner
      Scanner scanner = new Scanner(System.in);
   
      System.out.println("Please enter your account number");
   
      int accntnum = scanner.nextInt();
   
      System.out.println("Please enter your service code (P or R)");
   
      char s = scanner.next().charAt(0);
   
      double premdoverage = 0;
   
      double premnoverage = 0;
   
      double regprem = 25;
   
      if (s == 'P') {
      
         System.out.println ("Enter your daytime minutes used from (6 AM to 6PM)");
      
         double dayminutes = scanner.nextDouble();
      
         System.out.println ("Enter your nighttime minutes used from ( 6PM to 6 AM)");
      
         double nightminutes = scanner.nextDouble();
      
         if (dayminutes > 50 || nightminutes > 100) 
         
            {
            premdoverage = ((dayminutes-50) * .20f + regprem);
         
            premnoverage = ((nightminutes - 100) * .10f + regprem);
         
            System.out.println ("You owe" +(premdoverage + premnoverage) + "this month");}
         
         else
         
            System.out.println ("You owe $25 this month");
      
      
      
      
      
         }
   
      }

   }      
   
   
   
   
