public class 4B {
public static void main(String[] args) {
    
}
public boolean Pali(String word) {
    
if (word.length == 1)
return true;
else if (word.substring(0,1).equals(word.substring(word.length-1,word.length)))
pali(word.substring(1,word.length-1));
else
return false;

}
}