public class Testing {
   public static void main (String args[]){
   
      String bob = equalsTo("3422-33242");
      System.out.print(equalsTo("3422+33242"));
   
   }
   
   public  static String equalsTo(String number)
   {
      double num1,  num2, ans;
      
      int index;
      
      if (number.indexOf("-") != -1){
      index = number.indexOf("-");
         num1 = Double.parseDouble(number.substring(0,index));
         
         num2 = Double.parseDouble(number.substring((index+1)));
         
         ans = num1 - num2;
         return Double.toString(ans);
      }  
      else 
         return "error";
   }

}