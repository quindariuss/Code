import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.scene.layout.BorderPane;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.scene.control.TextField;


public class Calculator extends Application{
   public static void main(String[] args) {
      launch(args);
      }
   @Override
   public void start (Stage primaryStage) {
      primaryStage.setTitle("The White Mans Calculator");
   
      TextField textField = new TextField();
   
   
   
   
      Button numberZero = new Button();
      Button numberOne = new Button();
      Button numberTwo = new Button();
      Button numberThree = new Button();
      Button numberFour = new Button();
      Button numberFive = new Button();
      Button numberSix = new Button();
      Button numberSeven = new Button();
      Button numberEight = new Button();
      Button numberNine = new Button();
      Button plus = new Button();
      Button multiply = new Button();
      Button divde = new Button();
      Button minus = new Button();
      Button equal = new Button();
      Button clear = new Button();
   
      numberZero.setText("0");
      numberZero.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"0");
                              });
      numberOne.setText("1");
      numberOne.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"1");
                              });
      numberTwo.setText("2");
      numberTwo.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"2");
                              });
      numberThree.setText("3");
      numberThree.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"3");
                              });
      numberFour.setText("4");
      numberFour.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"4");
                              });
      numberFive.setText("5");
      numberFive.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"5");
                              });
      numberSix.setText("6");
      numberSix.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"6");
                              });
      numberSeven.setText("7");
      numberSeven.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"7");
                              });
      numberEight.setText("8");
      numberEight.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"8");
                              });
      numberNine.setText("9");
      numberNine.setOnAction(
                           action -> {
                              textField.setText(textField.getText()+"9");
                              });
      multiply.setText("*");
      multiply.setOnAction(
                          action -> {
                          
                             textField.setText(textField.getText()+"*");
                             int op = 4;
                             });
      divde.setText("÷");
      divde.setOnAction(
                       action -> {
                          textField.setText(textField.getText()+"÷");
                          int op = 3;
                          });
      minus.setText("-");
      minus.setOnAction(
                       action -> {
                          textField.setText(textField.getText()+"-");
                          int op = 1; 
                          });
      plus.setText("+");
      plus.setOnAction(
                      action -> {
                         textField.setText(textField.getText()+"+");
                         int op = 2;
                         });
      equal.setText("=");
      equal.setOnAction(
                       action -> {
                          String answer = textField.getText();
                       
                          textField.setText(equalsTo(answer));
                          });
      clear.setText("CE");
      clear.setOnAction(
                       action ->{
                          textField.setText("");
                          });
   
   
      GridPane numberGrid = new GridPane();
   //numberGrid.setPadding(new Insets(10,10,10,10));
      numberGrid.setHgap(15);
      numberGrid.setVgap(15);
   
      GridPane.setConstraints(numberSeven,0,0);
      GridPane.setConstraints(numberEight,1,0);
      GridPane.setConstraints(numberNine,2,0);
   
      GridPane.setConstraints(numberFour,0,1);
      GridPane.setConstraints(numberFive,1,1);
      GridPane.setConstraints(numberSix,2,1);
   
      GridPane.setConstraints(numberOne,0,2);
      GridPane.setConstraints(numberTwo,1,2);
      GridPane.setConstraints(numberThree,2,2);
   
      GridPane.setConstraints(clear,0,3);
      GridPane.setConstraints(numberZero,1,3);
      GridPane.setConstraints(equal,2,3);
   
      GridPane.setConstraints(minus,4,0);
      GridPane.setConstraints(plus,4,1);
      GridPane.setConstraints(divde,4,2);
      GridPane.setConstraints(multiply,4,3);
   
      numberGrid.getChildren().addAll(numberZero,numberOne,numberTwo,numberThree,numberFour,numberFive,numberSix,numberSeven,numberEight,numberNine,equal, clear,minus,plus,divde,multiply);
   
      BorderPane calc = new BorderPane();
   
      calc.setCenter(numberGrid);
      calc.setTop(textField);
   
      primaryStage.setScene(new Scene(calc,300,200));
   
      primaryStage.show();
   
   
      }

   public String equalsTo(String number){
      double num1,  num2,ans;
   
      int index;
      if (number.indexOf("-") != -1){
         index = number.indexOf("-");
         num1 = Double.parseDouble(number.substring(0,index));
         
         num2 = Double.parseDouble(number.substring((index+1)));
         
         ans = num1 - num2; 
         return Double.toString(ans); }
   
      if (number.indexOf("+") != -1){
         index = number.indexOf("+");
         num1 = Double.parseDouble(number.substring(0,index));
         
         num2 = Double.parseDouble(number.substring((index+1)));
         
         ans = num1 + num2;
         return Double.toString(ans);
         }  
   
      if (number.indexOf("÷") != -1){
         index = number.indexOf("÷");
         num1 = Double.parseDouble(number.substring(0,index));
       
         num2 = Double.parseDouble(number.substring((index+1)));
       
         ans = num1 / num2;
         return Double.toString(ans);
         }  
      if (number.indexOf("*") != -1){
         index = number.indexOf("*");
         num1 = Double.parseDouble(number.substring(0,index));
         
         num2 = Double.parseDouble(number.substring((index+1)));
         
         ans = num1 * num2;
         return Double.toString(ans);
         }  
      
      
      
      
      else 
         return "error";
      }



   }

















