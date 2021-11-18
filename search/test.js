const search = require("./search");

var s = new search.Search();

s.putInTrie("C++ programming tutorial", "hi there!");
s.putInTrie("Java lecture", "hello 2");

output = s.searchClasses("lec");

console.log(output);