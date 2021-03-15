public class WriteData{
    public static void main(String[] args) throws IOException {
       java.io.File file = new java.io.File("Scores.txt");
       if (file.exists){
          System.out.println("File already exsit");
          System.exit(1);
       }
       /**Create a File*/
       java.io.PrintWriter output = new java.io.PrintWriter(file);
       
       /**Write formatted output to the file*/
       output.print("John T Smith");
       output.println(90);
       output.print("Eric K Johns");
       output.println(85);
       
       /**Closeing the file*/
       
       output.close();
       
       
    }
 }