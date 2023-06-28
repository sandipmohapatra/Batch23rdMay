let x:string="Samsung TV,45000.00,InStrock";
let data:String[]=x.split(',');
for(var value of data)
{
    console.log(value);
}

console.log(`Name = ${data[0]}`);
console.log(`Price = ${data[1]}`);
console.log(`Stock status = ${data[2]}`);
