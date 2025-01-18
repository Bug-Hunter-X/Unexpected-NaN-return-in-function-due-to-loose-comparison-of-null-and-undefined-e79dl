# Unexpected NaN return in function due to loose comparison of null and undefined

This repository demonstrates a common JavaScript error related to the loose comparison operator (==) and the handling of null and undefined values. 

The `bug.js` file contains the erroneous code. The function `foo` is intended to return 0 if the input `x` is null. However, due to loose comparison, when `x` is undefined, the condition `x == null` evaluates to false resulting in `NaN` when 1 is added to undefined.

The corrected version in `bugSolution.js` uses strict equality (===) to correctly handle null and undefined values, ensuring that the function returns 0 only when x is strictly null or undefined.