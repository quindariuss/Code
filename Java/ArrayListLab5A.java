import java.util.*;

public class ArrayListLab5A{

   public static void main (String [] args){
      Scanner blondie = new Scanner(System.in);
      
      //PART ONE OF THE LAB ARRAYLIST
   
      ArrayList <Integer> blonded = new ArrayList<>();
      
      System.out.println("Enter your values into an ArrayList:");
      
      for (int count = 0; count != 10; count ++) {
         blonded.add(blondie.nextInt());
      }
      
      System.out.println("Your list that you inputed is:\n"+blonded);
      
      System.out.print("The sum of this list is :\n"+addList(blonded));
      
      //PART TWO OF THE LAB LINKED LIST
      
      LinkedList<Integer> blond = new LinkedList<>();
      
      System.out.println("Enter your values into a LinkedList:");
      
      for (int count = 0; count != 10; count ++) {
         blond.add(blondie.nextInt());
      }
      
      System.out.println("Your list that you inputed is:\n"+blond);
      
      System.out.print("The sum of this list is :\n"+addList(blond));
   
      
   }
   
   public static int addList(ArrayList<Integer> listToBeAdded){
   
      int result = 0;
      Iterator <Integer> iterator = listToBeAdded.iterator();
      
      while(iterator.hasNext()){
         result += iterator.next();
      }
      
      return result;
      
   
   }
   
   public static int addList(LinkedList<Integer> listToBeAdded){
   
      int result = 0;
      ListIterator <Integer> iterator = listToBeAdded.listIterator();
      
      while(iterator.hasNext()){
         result += iterator.next();
      }
      
      return result;
      
   
   }
   

}