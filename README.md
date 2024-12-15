# JavaScript Type Coercion Bug

This repository demonstrates a common yet subtle bug in JavaScript related to type coercion.  The `foo` function attempts to add a number and a string. JavaScript's loose typing leads to string concatenation instead of the expected numerical addition.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a solution to explicitly type check or convert values before performing operations.