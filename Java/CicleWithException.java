public class CicleWithException{
/**The radius of the circle*/
   private double radius;
/**The number of objects created*/
   private static int numberOfObjects = 0;
/**Constructing a Circle with a radius of 1*/
   public CicleWithException(){
      this(1.0);
   }
   /**Making a circle with a defined radius*/
   public CicleWithException(double newRadius){
      setRadius(newRadius);
      numberOfObjects++;
   }
   /**Returns the radius*/
   public double getRadius(){
      return radius;
   }
   /**Sets a new radius*/
   public void setRadius(double newRadius)
   throws IllegalArgumentException{
      if(newRadius>=0)
         radius = newRadius;
      else
         throw new IllegalArgumentException("Radius cannot be negative");
   
   }
   
   /**Returns the number of object*/
   public static int getNumberOfObject(){
      return numberOfObjects;
   }
   
   /**Return the area of the circle*/
   public double findArea(){
      return radius * radius * 3.14159;
   }
}