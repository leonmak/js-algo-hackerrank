function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);

        var late = 0;
        for(var i=0; i<n; i++){
            if(a[i]>0){
                late +=1;
            }
        }
        if(late > n-k){
            console.log("YES");
        } else {
            console.log("NO");
        }

    }


}
