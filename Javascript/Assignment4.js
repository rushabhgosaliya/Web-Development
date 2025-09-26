function Averagefind() {
    var dolfinavg = (dolphinscore[0] + dolphinscore[1] + dolphinscore[2]) / dolphinscore.length;
    var koalakasavg = (koalasscore[0] + koalasscore[1] + koalasscore[2]) / koalasscore.length;

    console.log(dolfinavg);
    console.log(koalakasavg);

    
    if((dolfinavg>minvalue & koalakasavg>minvalue) && (dolfinavg==koalakasavg))
    {
        console.log("Both Average is greater 100 and same values")
    }
    else if(dolfinavg<minvalue & koalakasavg<minvalue )
    {
        console.log("Both Average is below is 100")
    }

    if (dolfinavg > koalakasavg) {
        console.log("dolphin is winner")
    }
    else if (koalakasavg > dolfinavg) {
        console.log("Koalas is winner")
    }
    else {
        console.log("Both are winner")
    }

}

var minvalue=100;
var dolphinscore = [125, 150, 200];
var koalasscore = [125, 150, 200];


Averagefind();

