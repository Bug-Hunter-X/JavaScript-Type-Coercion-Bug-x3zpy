function foo(a,b){if(typeof a === 'number' && typeof b === 'number'){return a+b;}else{return "Error: Invalid input types";} }console.log(foo(1, "2")); // Output: Error: Invalid input typesconsole.log(foo(1,2)); // Output: 3