import java.util.*;
public class setTheroy {
   public static void main(String[] args) {
   	
     
   	
      Scanner scan_m = new Scanner (System.in);
      
      Scanner scan_n = new Scanner (System.in);
      
      System.out.println("Enter the number of elements in A");
      
      int m = scan_m.nextInt();
      
      System.out.println("Enter the number of elements in B");
      
      int n = scan_n.nextInt();
      
     
      
      int setA[] = new int [m]; 
      
   
   
      int setB[] = new int [n];
      
      
      System.out.println("SET A: \n");
      for (int i = 0; i < m; i++){
      
         System.out.println("Enter element : " + (i + 1));
      
      
         Scanner input = new Scanner (System.in);
         
         setA[i] = input.nextInt();
         
         }
         
      System.out.println("SET B: \n");
   
      for (int i = 0; i < n; i++){
      
         System.out.println("Enter element : " + (i + 1));
      
         Scanner input = new Scanner (System.in);
         
         setB[i] = input.nextInt();
         
         
         }
         
      int counter = 0;
         
      boolean subset = false;
         
      for (int i = 0; i < m; i++){
         for (int k = 0; k < n; k++){
            if (setA[i] == setB[k])
               counter++;
         
            }
         }
      if (counter == m)
         System.out.print("A is a subset of B");
      else
         System.out.print("A is not a subset of B");
   	
      }
   }
