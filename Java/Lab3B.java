import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.TilePane;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.scene.control.Label;

public class Lab3B extends Application {
   public static void main (String []args){
      launch(args);
   
   }
   @Override
   
   public void start (Stage primaryStage)  {
   
      Label answer = new Label();
   
      primaryStage.setTitle("Lab3B");
   
      TextField NumberOne = new TextField();
   	
      TextField NumberTwo = new TextField();
   
      Button add = new Button ("Click to add the numbers");
   
      add.setOnAction(
         action -> {
         //Integer.parseInt(NumberOne.getTtoext());
         //Integer.parseInt(NumberTwo.getText());
         
            answer.setText(Adding(Integer.parseInt(NumberOne.getText()),Integer.parseInt(NumberTwo.getText())));
         });
   	  
      HBox Numbers = new HBox (NumberOne,NumberTwo,add,answer);
   
   
   
      Scene scene = new Scene(Numbers,300,200);
   
      primaryStage.setScene(scene);
   
      primaryStage.show();
   
   }

   public String Adding(double numberOne, double numberTwo){
   
      double answers = numberOne + numberTwo;
   
      return Double.toString(answers);
   }
}
