public class birdSurvey{
   private Bird first;

   class Bird { 
      public String birdName; 
      public Bird nextBird;
      public int numberOfBirds=0;
   }

   public  birdSurvey()
   {
      first = null;
   }
   public void addBird(String name_){
      Bird newBird = new Bird();
      newBird.birdName = name_;
      
            
      
      newBird.nextBird = first;
      first = newBird;
      
   
   }
   
   /*public void addBackBird(String name_){
      Bird tempBird = new Bird();
      tempBird.birdName = name_;
      Bird current = first;
      while (current.next!=null)
      {
         current = current.next;
         current.nextBird = tempBird;
      }
   }
   
   public void remove (int n){
      Node current = first; 
      Node previous = current;
   
      if (current.num == (n))
      {
         first = current.next;
         return;
      }
      while(current.num != (n))
      {
         previous = current;
         current = current.next;
         if(current == null)
            return;
      }
      previous.next = current.next;
   }*/
   
   public String display()
   {
      Bird current = first;
      String data= "";
      while (current.nextBird!=null)
      {
         data += "" + current.birdName + "-->"+current.numberOfBirds;
         current = current.nextBird;
      }
      
      data += "" + current.birdName + "-->"+current.numberOfBirds;
      return data;
   }
   
   public int searchAndCount(String look)
   {
    while (current.nextBird!=null)
      {
         if (current.birdName==look)
      }
      
      data += "" + current.birdName + "-->"+current.numberOfBirds;
      return data;
   }
   
   /*public String getCount()
   {
      String data = "";
   
   }*/
   
   
}
