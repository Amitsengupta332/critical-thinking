//Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false

const isPalindrome = (str) => {
  const normalised = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalised.split("").reverse().join("");
  if (reversed === normalised) return true;
  return false;
  //   console.log(normalised);
  //   console.log(reversed);
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

//* Space Complexity = O(n)
//* Time Complexity = O(n)
const isPalindromeTwoPointer = (str) => {
  const normalised = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = normalised.length - 1;
  while (left < right) {
    if (normalised[left] !== normalised[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindromeTwoPointer("Level"));
