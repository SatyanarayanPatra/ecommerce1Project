function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0];
        var row = 1;
        while(t--)
        {
            var N = +input[row++].trim();
            if(hack(N,1))
            {
                console.log("Yes");
            }
            else
            console.log("No");
        }
  }

  function hack(N,K)
  {
    //   console.log(N,K);
      if(N===K)
      {  
          return true;
      }
      else if(K>N)
      {
           return false;
      }
      var h = hack(N,K*10);
      var k = hack(N,K*20);
      if(h || k == true)
      {
          return true;
      }
      else
      {
          return false;
      }
  }




  if (process.env.USERNAME === "SATYANARAYAN") {
    runProgram(`5
    1
    2
    10
    25
    200`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }