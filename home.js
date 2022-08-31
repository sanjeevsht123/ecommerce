console.clear();
var num1=2;
var num2=3;
var sum=num1+num2;
console.log("The sum is:"+sum);
console.log(typeof(sum));
var datype="hello";
console.log(typeof(datype));


//Change the data types of variables.
console.clear();
var num1=33;
var num=22.3;
console.log(num1.toString());
console.log(num.toString());
console.log(parseInt(num1));
console.log(parseInt(num));
console.log(parseFloat(num));

//Strings properties in Javascript.
console.clear();
var myString="Hello World";
console.log(myString);
console.log(typeof(myString));
var anotherString="This is \"My\" first 'Strings' test."
console.log(anotherString)

//In-Built String Functions
console.clear();
var fString="This is my first strings in the javascript,javascript";
console.log(fString.length);
console.log(fString.indexOf("first"));
console.log(myString.length)
console.log(fString.lastIndexOf('javascript'));
console.log(fString.slice(0,10));
console.log(fString.slice(10));
console.log(fString.substr(0,4));
console.log(fString.substr(5,40));


//In-built String Functions
console.clear();
var lString="This is Javascript"
console.log(lString.toUpperCase());
var fName="Sanjeev"
var lName="Shrestha"
console.log(fName.concat(' ',lName));
var space="  my bad  "
console.log(space.trim())
console.log(space.charAt(6,7,8));


//Conditional Statements

// 1. If-else
console.clear()
if(3>4)
{console.log("that grear")}
else{console.log("false")}

// 2.Switch
console.clear()
var day="Mon";
switch(day)
{
    case 'Mon':
        console.log("10-6")
        break;
        case 'Tue':
            console.log("10-5")
            break;
            case 'Twed':
            console.log("10-4")
            break;
            case 'Thu':
            console.log("10-3")
            break;
            case 'fri':
            console.log("10-2")
            break;
            case 'Sat':
                console.log("Close")
                break;
    default:
        console.log("Invalid day");

}

//Implict Type Coercion

console.clear()
var mNum=5
var mStr="Hello"
var sum= mStr+" "+mNum
console.log(sum)
console.log(typeof(sum))

console.log('hello'+' '+23)
console.log(typeof('hello'+' '+23))

//Object

console.clear()

var mName={
    name:"Sanjeev Shrestha",
    age:20,
    address:{
        District:"Sindupalchowk",
        Mun:"Lisankhu",
        Ward:3
    },
    gender:"male",
    martial:false,
    Education:function(){
        setTimeout(function(){
            console.log("BCA")
        },7000)
    }

}
//check

console.log(mName.name)
console.log(mName.address.District)
console.log(mName.martial)
console.log(mName.Education)

//another
console.clear()
var Car={
    model:"Honda 3",
    top_speed:200,
    price:2000000,
    color:WebGLQuery,
  /*  manufacture:function(){
        setTimeout(function(){
            console.log("Japan")
        },5000)
    }*/
}
console.log(Car.model)
console.log(Car.top_speed)
//console.log(Car.manufacture)
//console.log(Car.manufacture())

//Arrays

console.clear()

var friends=['sanjeev','sunil','sangita']
console.log(friends[0])
friends[0]='sanjib'
console.log(friends[0])
friends[friends.length]='sunita'
console.log(friends)
friends.push('sujan','shrijana')
console.log(friends)
friends.pop()
console.log(friends)

//Array part 2

console.clear()

var mFriends=['sita','ram','gita','hari']
mFriends.splice(3,0,'rahul','bishnu','nakhul')
console.log(mFriends)
mFriends.splice(2,3)
console.log(mFriends)

//concatenation

var mOfficeFriends=['nita','nabin','sanil']
var mAllFriends=mFriends.concat(mOfficeFriends)
console.log(mAllFriends)
mAllFriends.sort()
console.log(mAllFriends)
mAllFriends.reverse()
console.log(mAllFriends)


//Functions In javascript
console.clear()
var m=mSum()
console.log('The sum is= '+m)

function mSum(){
    var num1=12
    var num2=12
    var sum=num1+num2
    return sum
}

//Arguments in function

console.clear()

function Sum(num1=10,num2=20){
    console.log('num 1: '+num1)
    console.log('num 2: '+num2)
    console.log('sum: '+(num1+num2))
}
Sum()

//Global and Local Variables

console.clear()

var num1=10
function Sum(num2){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}
Sum(10)