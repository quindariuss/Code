public class Assignment4Ab {
   public static void main(String[] args) {
      System.out.println(baseCase(53621, 7, 1));
      }
   public static double baseCase(double num, double base, double power) {
      if (num < base) 
         return num;
      if (Math.pow(base,power) < num)
         {
         baseCase(num,base,power+1);
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
   }

