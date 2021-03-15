public class Lab4B {
    public static void main(String[] args) {
        System.out.println(Pali("hdfahsfhaljhf"));
    }
    public static boolean Pali(String word) {
        
    if (word.length() <= 1)

   {return true;}

    else
    if (word.substring(0,1).equals(word.substring(word.length()-1,word.length())))

    {return Pali(word.substring(1,word.length()-1));}

    return false;
    
    }
    }