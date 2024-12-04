
let fruit=new Object();
fruit.name="orange"
fruit.calories=20
fruit.price=1
fruit.printDetails=function(){
    let keys=Object.keys(this);
    let str=""
    for (const key of keys) {
        
        if (typeof this[key]!=='function')
            str+= key +":"+this[key];
    }
    return str;
}  
let fruits=[
    {
        name:"apple",
        calories:55,
        price:1.5,
        printDetails:function(){
            let keys=Object.keys(this);
            let str=""
            for (const key of keys) {        
                if (typeof this[key]!=='function')
                    str+= key +": "+this[key]+" ";
            }
            return str;
        }  

    },
    {
        name:"pear",
        calories:70,
        price:2,
        printDetails:function(){
            let keys=Object.keys(this);
            let str=""
            for (const key of keys) {        
                if (typeof this[key]!=='function')
                    str+= key +":"+this[key]+ " ";
            }
            return str;
        }  
    },
    fruit
]
function printFruits(){
 for(let i=0;i<fruits.length;i++)
 {
    console.log(fruits[i].printDetails());
 }
}
printFruits();
fruits[0].color="green"
function printExistsColor(){
    for(let i=0;i<fruits.length;i++)
    {
        if("color" in fruits[i])
            console.log(fruits[i].printDetails());
    }   
}
printExistsColor();
function printOne(){
    let str="";
    for(const key in fruits[0])
    {
        if (typeof fruits[0][key]!=='function')
        {
            str+= key +":"+ fruits[0][key]+ " ";
        }
    }
    console.log(str)
}
printOne();
function deleteAndPrint()
{
    delete (fruits[1].price);
    document.querySelector("#afterdelete").innerHTML=fruits[1].printDetails();
}
deleteAndPrint();

const changePrice=()=>{
let p=document.querySelector("#price").value;
fruits[0].price=p;
}

const deleteByCalories=()=>{
    let c=document.querySelector("#calories").value;
    let newFruits=fruits.filter(x=>x.calories>c); 
  
}
const addValidChecking=()=>{
    for(let i=0;i<fruits.length;i++)
    {
        Object.defineProperty(fruits[i],"Price",{
            set(val){
                if(val=>10&&val<=1000)
                {
                    fruits[i].price=val;
                }
            }
        })
    }
}
addValidChecking();

function MessageBox(m={body:"",title:""},color="",picture=""){
    this.color=color;
    this.picture=picture;
    this.massage=m

    MessageBox.prototype.render=function(){
        let x=document.createElement("div");
        x.id="msgDisplay";
        x.style.backgroundColor=this.color;
        let t=document.createElement("h1");
        t.innerHTML=this.massage.title;
        x.appendChild(t);
        let b=document.createElement("p")
        b.innerHTML=this.massage.body
        x.appendChild(b);

        let y=document.createElement("img");
        y.src=this.picture;
        x.appendChild(y);
        return x;
    }
}
let z=""
const changeType=(e)=>{
z=e.target.value;
}
let m1={info:new MessageBox({title:"info",body:"iiiii"},"yellow","./5.jpg"),
        warning:new MessageBox({title:"warning",body:"wwww"},"red","./5.jpg"),
        error:new MessageBox({title:"error",body:"eeeee"},"black","./5.jpg")};
const display =()=>{
    
    let t1=document.querySelector("#t1").value;
    let t2=document.querySelector("#t2").value;
  
        m1[z].massage.title=t1;
        m1[z].massage.body=t2;
        document.querySelector("#msgDisplay").replaceWith(m1[z].render())
        
   
}
