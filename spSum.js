function runProgram(input) {
    var[N,K] = input.trim().split(" ").map(Number);
    
    console.log(superSum(N,K));
  }


  function Super(N)
  {
      if(N < 10)
      {
        //   console.log(N);
          return (N);
      }
      else
      {
          var sum = 0;
          while(N > 0)
          {
              sum = sum + (N%10)
            //   console.log(sum)
              N = Math.floor(N/10)
          }
          Super(sum);
      }
  }


  function superSum(N, K)
  {
    //   console.log(N,K);
      var sum = Super(N));
      sum = sum * K;
      return(Super(sum));
  }
  
  if (process.env.USERNAME === "SATYANARAYAN") {
    runProgram(`148 3`);
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