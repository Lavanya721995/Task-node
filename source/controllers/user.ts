/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";

const balanced = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let reqBody = req.body.data;
    let Calculation = await getBalancedSubstrings(reqBody);
    return res.status(200).json({
      data: Calculation,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

const fibonocci = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let reqBody = req.body.data;
    let Calculation = fibonocciSeries(reqBody);
    return res.status(200).json({
      data: Calculation,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

function fibonocciSeries(n: any, cache: any = {}) {
  if (n in cache) {
    return cache[n];
  } else if (n <= 1) {
    return n;
  } else {
    cache[n] = fibonocciSeries(n - 1, cache) + fibonocciSeries(n - 2, cache);
    return cache[n];
  }
}

function isBalanced(str: any) {
  let charCount: any = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  let charList = Object.keys(charCount);
  if (charList.length !== 2) {
    return false;
  }
  let count1 = charCount[charList[0]];
  let count2 = charCount[charList[1]];
  return count1 === count2;
}

function getBalancedSubstrings(S: any) {
  let maxLen = 0;
  let balancedSubstrings = [];
  for (let i = 0; i < S.length; i++) {
    for (let j = i + 2; j <= S.length; j++) {
      let substr = S.substring(i, j);
      if (isBalanced(substr) && substr.length > maxLen) {
        balancedSubstrings = [substr];
        maxLen = substr.length;
      } else if (isBalanced(substr) && substr.length === maxLen) {
        balancedSubstrings.push(substr);
      }
    }
  }
  return balancedSubstrings;
}

export default { balanced, fibonocci };
