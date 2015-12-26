
function main() {
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);


    if(y1>y2){
      console.log(10000);
    } else if(y1<y2){
        console.log(0);
    } else if(m1>m2){
      console.log(500*(m1-m2));
    } else if (m1<m2){
        console.log(0);
    } else if(d1>d2){
        console.log(15*(d1-d2));
    } else {
        console.log(0);
    }
}
