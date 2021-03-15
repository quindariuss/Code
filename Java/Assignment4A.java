public class Assignment4A {
   public static void main(String[] args) {
      System.out.println(baseCase(5672, 8, 1));
      System.out.println(numConvert(16));
   }
   public static double baseCase(double num, double base, double power) {
      if (num < base) 
         return num;
      if (Math.pow(base,power) < num)
      {
         return baseCase(num,base,power+1);
      }
       
      power = power - 1;
      double ans = Math.pow(base,power);
       
      ans = Math.floor(num/ans);
       
      if (num % Math.pow(num,power)==0){
          
         return (ans*Math.pow(10,power));
          
      }
          
      else{
          
         num = num - (Math.pow(base,power)*ans);
          
         return (ans*Math.pow(10,power)) + baseCase(num,base,1);
      } 
   } 
   public static String numConvert(int num){
      switch (num){
         case 0:
            return "0";
            
      
         case 1:
            return "1";
         
         case 2:
            return "2";
         
         case 3:
            return "3";
         
         case 4:
            return "4";
         
         case 5:
            return "5";
         
         case 6:
            return "6";
         
         case 7:
            return "7";
         
         case 8:
            return "8";
         
         case 9:
            return "9";
         
         case 10:
            return "A";
         
         case 11:
            return "B";
         
         case 12:
            return "C";
         
         case 13:
            return "D";
         
         case 14:
            return "E";
         
         case 15:
            return "F";
         
         case 16:
            return "G";
         
         case 17:
            return "H";
         
         case 18:
            return "I";
         
         case 19:
            return "J";
         
         case 20:
            return "K";
         
         case 21:
            return "L";
         
         case 22:
            return "M";
         
         case 23:
            return "N";
         
         case 24:
            return "O";
         
         case 25:
            return "P";
         
         case 26:
            return "Q";
         
         case 27:
            return "R";
         
         case 28:
            return "S";
         
         case 29:
            return "T";
         
         case 30:
            return "U";
         
         case 31:
            return "V";
         
         case 32:
            return "W";
         
         case 33:
            return "X";
         
         case 34:
            return "Y";
         
         case 35:
            return "Z";
         default :
            return "0";
      }
      
      
   }
    
}
 
