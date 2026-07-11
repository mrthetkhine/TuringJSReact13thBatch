class Human
{
    name:string;
    constructor(name:string)
    {
        this.name=name;
        console.log('Human constructor called');
    }
    display()
    {
        console.log('Name is ',this.name);
    }
}
class Teacher extends Human
{
    subject:string;
    constructor(name:string,subject:string)
    {
        super(name);
        this.subject=subject;
        console.log('Teacher constructor called');
    }
    display(): void {
        super.display();
        console.log('Subject is ',this.subject);
    }
}
/*
let h:Human = new Human("Jhon");
h.display();
*/ 
let t:Teacher = new Teacher('U Hla','Maths');
t.display();