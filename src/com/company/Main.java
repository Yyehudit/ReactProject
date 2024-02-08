package com.company;
import  java.util.Scanner;
public class Main {

    public static void main(String[] args) {
	Scanner scan =new Scanner(System.in);

        Toy mytoy1;
        mytoy1=new Toy("lego","pink",50,100,"torkya",500);
        Toy mytoy2=new Toy("set",11);
        Toy mytoy3=new Toy();
        mytoy1.printlabel();
        mytoy2.printlabel();
        mytoy3.printlabel();

        System.out.println(mytoy3.myprice());

    }
}
