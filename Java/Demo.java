public class Demo{
	public static void main(String[] args) {
		System.out.println(numConvert(16));
		System.out.println(fits(2,23));
		System.out.println(MaxPow(49,7));
		System.out.println(bases(2323,7));
	}
	public static String numConvert(int num){
	        switch ((int)num){
	            case 0:
	            return "0";
	            
	            case 1:
	            return "1";
	            
	            case 2:
	            return "2";
	            
	            case 3:
	            return "3";
	            
	            case 4:
	            return "4";
	            
	            case 5:
	            return "5";
	            
	            case 6:
	            return "6";
	            
	            case 7:
	            return "7";
	            
	            case 8:
	            return "8";
	            
	            case 9:
	            return "9";
	            
	            case 10:
	            return "A";
	            
	            case 11:
	            return "B";
	            
	            case 12:
	            return "C";
	            
	            case 13:
	            return "D";
	            
	            case 14:
	            return "E";
	            
	            case 15:
	            return "F";
	            
	            case 16:
	            return "G";
	            
	            case 17:
	            return "H";
	            
	            case 18:
	            return "I";
	            
	            case 19:
	            return "J";
	            
	            case 20:
	            return "K";
	            
	            case 21:
	            return "L";
	            
	            case 22:
	            return "M";
	            
	            case 23:
	            return "N";
	            
	            case 24:
	            return "O";
	            
	            case 25:
	            return "P";
	            
	            case 26:
	            return "Q";

	            case 27:
	            return "R";
	            
	            case 28:
	            return "S";
	            
	            case 29:
	            return "T";
	            
	            case 30:
	            return "U";
	            
	            case 31:
	            return "V";
	            
	            case 32:
	            return "W";
	            
	            case 33:
	            return "X";
	            
	            case 34:
	            return "Y";
	            
	            case 35:
	            return "Z";
	            
				default:
				return "null";
	        }
}
public static int fits(double smallNum, double bigNum)
	{
		return (int)  Math.floor(bigNum/smallNum);
	}
	
	public static int MaxPow(double num, int base){
		
		int count = 0;
		
		while (num > Math.pow(base,count))
					{
						if (num >= Math.pow(base,count+1))
						count++;
						else
						break;
					}
		return count;
	}
	
	public static String bases(double num, int base){
		if (num < base)
			return numConvert((int)num);
		else 
			return numConvert(fits((Math.pow(base,MaxPow(num,base))),num))+ bases((num-()),base);
		
	}
}