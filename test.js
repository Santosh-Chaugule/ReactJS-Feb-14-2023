


class A {
    //1.Properties
    name;//this is only declaration
    surname = '';//This is delclaration and initialization.
    address = "pune";//delcaration and initialisazion]
    state;


    //2.Constructor
    //the role of the constructor is innitialise the properties of class
    constructor() {
        //this.member
        this.name = "santosh";
        this.surname = "chaugule";
        this.fatherName = "Nivrutti";
    }



    //3.Methods
    showName() {
        console.log(this.name + this.fatherName + this.surname)//internal obj
    }
    setState(data){
this.setState=data;
    }
}

showState(){
    console.log(this.state)
}
class B extends A {
    //1.Properties
    friend1;
    friend2 = "";


    //2.Constructor
    constructor(frnd3) {//formal argument

        super();//
        this.friend1 = "onkar";
        this.friend2 = "Yogesh";
        // this.friend3 = 'Shekhar';
        this.friend3 = frnd3;

    }


    //3.Methods

    listMyFriends() {
        console.log(this.friend1);
        console.log(this.friend2);
        console.log(this.friend3);
    }


}
let obj2 = new B("Shekhar")//actuall argument

obj2.listMyFriends();
obj2.showName();
//lets create the class Object
//let Object=new ClassName();
obj2.setState({
    name:"Yogesh",
    surname:"gaikwad"

})

let obj = new A();
//this obj is an external 
//object.member
//obj.showName()