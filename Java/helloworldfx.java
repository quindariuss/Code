import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.TilePane;



public class helloworldfx extends Application { 

   public static void main (String [] args ) {
   
      launch(args);
      
   }
   
   @Override
   
   public void start (Stage primaryStage) {
   
   //the title of the application 
   
      primaryStage.setTitle("first fucking app");
      
      //creating a button
   
      Button button1 = new Button();
      
      Button button2 = new Button();
      
      Button button3 = new Button();
      
      Button button4 = new Button();
      
      Button button5 = new Button();
      
      Button button6 = new Button();
      
      button1.setText("Button Number One");
      
      button2.setText("Button Number Two");
      
      button3.setText("Button Number Three");
      
      button4.setText("Button Number Four");
      
      button5.setText("Button Number Five");
      
      button6.setText("Button Number Six");
      
      button1.setOnAction(
         new EventHandler<ActionEvent>(){
         
            @Override
            
            public void handle (ActionEvent event) { 
            
               System.out.println("The first fucking button was pressed");
               
            }
            
         });
         
      button2.setOnAction(
         new EventHandler<ActionEvent>(){
         
            @Override
            
            public void handle (ActionEvent event) { 
            
               System.out.println("The second  button was pressed");
               
            }
            
         }); button3.setOnAction(
         new EventHandler<ActionEvent>(){
         
            @Override
            
            public void handle (ActionEvent event) { 
            
               System.out.println("The third  button was pressed");
               
            }
            
         }); button4.setOnAction(
         new EventHandler<ActionEvent>(){
         
            @Override
            
            public void handle (ActionEvent event) { 
            
               System.out.println("The fourth fucking button was pressed");
               
            }
            
         }); button5.setOnAction(
         new EventHandler<ActionEvent>(){
         
            @Override
            
            public void handle (ActionEvent event) { 
            
               System.out.println("The fith  button was pressed");
               
            }
            
         }); button6.setOnAction(
         new EventHandler<ActionEvent>(){
         
            @Override
            
            public void handle (ActionEvent event) { 
            
               System.out.println("The sixth  button was pressed");
               
            }
            
         }); 
         
      TilePane root = new TilePane();
      
      root.getChildren().add(button1);
      
      root.getChildren().add(button2);
      
      root.getChildren().add(button3);
      
      root.getChildren().add(button4);
      
      root.getChildren().add(button5);
      
      root.getChildren().add(button6);
      
      primaryStage.setScene(new Scene(root, 500, 450));
      
      primaryStage.show();
      
   
   
   }
}