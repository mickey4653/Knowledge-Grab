/* Defines a node in a Trie. 
   Each node has a reference to a Course object. */

function TrieNode() {
    this.courses = [];
    this.childrenNodes = {}; // Dictionary between letter and sub-tree

    this.putInTrie = function(keyString, courseObject) {
        // If this is the end of the string, simply add the course
        if (keyString == "") {
            this.courses.push(courseObject);
            
        } else {
            // Otherwise, go to the appropriate child node and continue
            var firstCharacter = keyString.charAt(0);
            if (!(firstCharacter in this.childrenNodes)) {
                this.childrenNodes[firstCharacter] = new TrieNode();
            }

            var childNode = this.childrenNodes[keyString.charAt(0)];
            var restOfString = keyString.substring(1);
            childNode.putInTrie(restOfString, courseObject);
        }
    }

    this.getCoursesFromString = function(keyString) {
        if (keyString === "") {
            var outputCourses = this.courses;
            for (var childNodeKey in this.childrenNodes) {
                thisChildNode = this.childrenNodes[childNodeKey];
                var childCourses = thisChildNode.getCoursesFromString("");

                Array.prototype.push.apply(outputCourses, childCourses);
            }

            return outputCourses;

        } else {
            firstCharacter = keyString.charAt(0);
            restOfString = keyString.substring(1);

            relevantChild = this.childrenNodes[firstCharacter];
            if (relevantChild) {
                return relevantChild.getCoursesFromString(restOfString);
            } else {
                return [];
            }
        }
    }
}

exports.TrieNode = TrieNode;