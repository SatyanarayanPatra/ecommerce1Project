function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var t = +input[0];
    var row = 1;
    while(t--) 
    {
        var arr = input[row++].trim();
        balanced(arr);
    }
  }

  function balanced(arr)
  {
    //   n
      var stack = [];
      for(var i = 0; i < arr.length; i++)
      {
          if(arr[i] == '(' || arr[i] == '[' || arr[i] == '{')
          {
              stack.push(arr[i]);
          }
          else
          {
              if(arr[i] == ')' && stack[stack.length-1] != '(')
              {
                  console.log("not balanced");
                  return;
              }
              else if(arr[i] == ']' && stack[stack.length-1] != '[')
              {
                  console.log("not balanced");
                  return;
              }
              else if(arr[i] == '}' && stack[stack.length] != '{')
              {
                  console.log("not balanced");
                  return;
              }
              else
              {
                  stack.pop();
              }
            }
        }
            //   else if(stack.length == 0 && arr.length != 0)
            //   {
            //       console.log("not balanced");
            //       return;
            //   }
            //   else
            //   {
            //       stack.pop();
            //   }
    //       }
    //   }
    //   console.log(stack);
      if(stack.length == 0)
      {
          console.log("balanced");
      }
      else
      {
          console.log("not balanced");
          return;
      }
  }




  if (process.env.USERNAME === "SATYANARAYAN") {
    runProgram(`3
    {([])}
    ()
    ([]`);
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