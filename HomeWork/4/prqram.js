var number =23452;
var say =0;

for(i=0; i<number; i++){
    number /=10;
    if(number>0){
        say++
    }
}console.log(say +1);