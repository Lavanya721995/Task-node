# Task-node

# Fibonocci-Series Work flow

        The function takes an integer n as its input and returns the Fibonacci value at that position in the series. If n is less than or equal to 1, the function simply returns n. Otherwise, it calls itself recursively, passing in n-1 and n-2 as arguments, and adds the two resulting values together

        In this version of the function, the results of previous calculations are stored in the cache object, which is passed as an optional argument. If the requested Fibonacci value is already in the cache, it's simply returned without any additional calculations. If not, the function calculates the value recursively as before, but stores the result in the cache for future use.

        By using memoization, this version of the function can handle much larger values of n without slowing down exponentially

# Largest-Balanced-String

        The getBalancedSubstrings function uses a nested loop to generate all possible substrings of S, and then checks whether each substring is balanced using the isBalanced function. If a balanced substring is found with a length greater than the previous maximum length, it replaces the balancedSubstrings array with a new array containing only the current substring. If a balanced substring is found with a length equal to the previous maximum length, it adds the substring to the balancedSubstrings array

To run,

1.  npm i
2.  npm run dev
3.  For Fibonacci use http://localhost:6060/fibonocci as post method and the request should be {
    "data":10
    }
4.  For Fibonacci use http://localhost:6060/balanced as post method and the request should be {
    "data":"abababa"
    }
