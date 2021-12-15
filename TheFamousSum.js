function runProgram(input) {
    var [N,K] = input.trim().split(" ").map(Number);
    famousSum(N,K);
    
  }
  function fame(N)
  {
      if(N < 10)
      {
          return N;
      }
      else
      {
          var sum = 0;
          while(N > 0)
          {
              sum += N%10;
              N = Math.floor(N/10);
          }
          fame(sum + N);
      }
  }

  function famousSum(N,K)
  {
    //   console.log(N,K);
      var S = fame(N);
      console.log(S);
//       S = S*K;
//       var L = fame(S);
//       console.log(L);
  }

  if (process.env.USERNAME === "SATYANARAYAN") {
    runProgram(`123 3`);
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