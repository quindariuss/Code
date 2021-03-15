public class testException {
   public static void main (String [] args){
      try {
         System.out.println(sum(new int [] {1,2,3,4,5} ));
      
      }
      
      catch (Exception ex){
         ex.printStackTrace();
         System.out.println("\n"+ex.getMessage());
         System.out.println("\n"+ ex.toString());
         
         System.out.println("\nTrace info obtained from getstackTrace");
         StackTraceElement[] trace = ex.getStackTrace();
         for (int i = 0; i<trace.length;i++){
            System.out.print("method" + trace[i].getMethodName());
            System.out.print("("+trace[i].getClassName()+":");
            System.out.println(trace[i].getLineNumber()+")");
         }
      }
   }
   public static int sum(int[] list){
      int result = 0;
      for (int i = 0 ; i <= list.length;i++){
         result += list[i];
      }
      return result;
   }
}