const data1= [17,21,23];
const data2= [12,5 ,-5,0,4];
const printForecast =(arr)=>{
    const length =arr.length;
    var temp='';
    for(let i=0;i<arr.length;i++){
        const emlement =arr[i];
       temp+= `... ${emlement}°C in day ${i+1}`;
    }
    return temp;
};
console.log(printForecast(data1));
console.log(printForecast(data2));