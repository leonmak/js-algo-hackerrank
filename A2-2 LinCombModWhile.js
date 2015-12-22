process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());



        var biggest = [0,0];

        for(var i=0; i<n; i++){
            var acc=[0,0];
            if ((n-i)%5===0 && i%3===0){
                acc =[i,n-i];
            }

            if((n-i)%3===0 && i%5===0){
                acc =[n-i,i];
            }

            if(acc[0]>biggest[0]){
                biggest = acc;
            } else if(acc[1]>biggest[1]){
                biggest = acc;
            }

        }


        var ans=0;
        for(var j=0; j<biggest[1]; j++){
            ans+= (Math.pow(10,j) *3);
        }
        for(var j=biggest[1]; j<biggest[1]+ biggest[0]; j++){
            ans+= (Math.pow(10,j) *5);
        }

        if(biggest[0]===0 && biggest[1]===0){
            console.log(-1);
        } else {
            console.log(ans);
        }
    }
}

///////////////////////////// Best Solution /////////////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());

        var y=(n);
        var z=y;
        while(z%3!=0){
          z-=5;
        }
        if(z<0) {
            console.log('-1');
        } else{
            console.log(Array(z+1).join('5')+Array(y-z+1).join('3'));
        }

    }
}
