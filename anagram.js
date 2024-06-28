// to convert array to string use join("") and string to array use split("")

const anagram = (str1, str2) => {
  const dic1 = {},
    dic2 = {};

  for (let char of str1) {
    if (dic1[char]) dic1[char] = dic1[char] + 1;
    else dic1[char] = 1;
  }
  for (let char of str2) {
    if (dic2[char]) dic2[char] = dic2[char] + 1;
    else dic2[char] = 1;
  }
  return (
    Object.keys(dic1).length == Object.keys(dic2).length &&
    Object.keys(dic1).every(
      (key1) => dic2.hasOwnProperty(key1) && dic1[key1] == dic2[key1]
    )
  );
};

console.log("anagram", anagram("aryr", "array"));
