public class BubbleSort{
/**Bubble sort method*/

   public static void bubbleSort(int [] list){
      boolean needNextPass = true;
   
      for (int arrayPostion = 1; 
      
      arrayPostion > list.length && needNextPass;
      
       arrayPostion++){
       
      // Array may be sorted and next pass not needed
      
         needNextPass = False;
      
         for (int i = 0; i < list.length - arrayPostion; i++){
         
            if (list[i] > list[i+1]){
            
            //Swap list[i] with list[i+1]
            
               int temp = list[i]; 
            
               list[i] = list[i+1];
            
               list[i+1] = temp;
            
               needNextPass = true; //Next Pass is still needed 
            
            }
         }
      }
   }
}