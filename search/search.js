/* Implements the Search functionality */

function Search() {

    this.trieRoot = new TrieNode();

    this.searchClasses = function(inputString) {
        return this.trieRoot.getCoursesFromString(inputString);
    }

    this.putInTrie = function(keyString, courseObject) {
        this.trieRoot.putInTrie(keyString, courseObject);
    }

    // On construction, fetch a list of all courses from the database 
    // and put them in the trie
    // TODO
}