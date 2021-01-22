export function isAnagram(firstWord, secondWord) {

    if (firstWord.length != secondWord.length) { //falls länge unterschiedlich sind, ist es kein anagram
        return false;
    }

    else if (firstWord.split("").sort().join("") === secondWord.split("").sort().join("")) { //splitten, sortieren, zusammenfügen, dann vergleichen, falls keine exakte übereinstimmung dann kein anagram.
        return true;
    }
    else { //defaultcase
        return false;
    }
}