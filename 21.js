let S=2000000;
let years=5;
let p=0.1;
let perepl=0;
let plata = S/(years*12);
for (let i=1;i<=years*12;i++)
{
perepl+=S*p/12
S-=plata;
}
console.log("Переплата: " + perepl + " рублей");