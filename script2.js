class person {
    constructor (name,age,gender,address,email){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.address=address;
        this.email=email;
    }

    getperson(){
        return "my name is " + this.name
    }
    getage(){
        return`my age is ${c.age}`
    }
    getgender(){
        return "i am a " + this.gender
    }
    getaddress(){
        return`my address ${c.address}`
    }
    getemail(){
        return "email id:" + this.email
        }
    
}
var c =new person("sakthi",24,"male","salem","sakthikumar.vk@gmail.com");
console.log(c.getperson());
console.log(c.getage())
console.log(c.getgender())
console.log(c.getaddress())
console.log(c.getemail())
