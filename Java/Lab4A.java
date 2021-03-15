public class Lab4A {
	public static void main(String[] args) {
		System.out.println(Vowels("hellobobby"));
	}
	public static int Vowels (String vowels){
		if (vowels.length() == 1)
		{
			
			if (vowels.equals("a")||vowels.equals("e")||vowels.equals("i")||vowels.equals("o")||vowels.equals("u"))
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
		else
		{
			int middlevalue = vowels.length()/2;
			return Vowels(vowels.substring(0,middlevalue)) + Vowels(vowels.substring(middlevalue,vowels.length()));
			
		}
	
		
}
public static int hardVowels(String vowels)
{
	int length = vowels.length();
	int vowelsnum = 0;
	for (int i = 0; i != length;i++){
		if (vowels.substring(i,(i+1)).equals("a")||vowels.substring(i,(i+1)).equals("e")||vowels.substring(i,(i+1)).equals("i")||vowels.substring(i,(i+1)).equals("o")||vowels.substring(i,(i+1)).equals("u"))
			vowelsnum++;}
	return vowelsnum;

}

}