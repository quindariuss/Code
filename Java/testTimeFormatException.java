public class testTimeFormatException{
    public static void validate(int time) throws timeFormatException
  {  if (time>2400)
    throw new timeFormatException("Too big of value");
    else if  (time>1200&&time<2400)
    System.out.println(time-1200);
    else
    System.out.println(time);
}
public static void main(String[] args) {
    try{
        validate(1204);
    }
    catch(Exception m){System.out.print("Exception occurred:"+m);}
}

}