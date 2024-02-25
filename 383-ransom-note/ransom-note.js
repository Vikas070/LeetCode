/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // Looping into the magazine string
    for (const char of magazine) {
        // Replacing every character found in ransomNote similar to magazine with ""
        ransomNote = ransomNote.replace(char, "");
    }
    // If ransomNote is blank it means we can form magazine with ransomNote so return TRUE
    if (!ransomNote) return true;
    // Else we cannot make it so return FALSE
    return false;
};