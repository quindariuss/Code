import sun.tools.tree.ShiftRightExpression;

public class testClothes {
    public static void main(String[] args) {
        clothingStack bob = new clothingStack();
        Clothing shirt = new Clothing("shirt", "blue", false);
        Clothing pants = new Clothing("pants", "blue", false);
        Clothing pants_ = new Clothing("pants", "blue", false);



        bob.push(shirt);
        bob.push(pants);
        bob.pop();
        bob.push(pants_);
    }
}