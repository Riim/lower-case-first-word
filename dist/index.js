"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reFirstWord = /^[0-9A-Z]+?(?=[A-Z][a-z]|[0-9a-z])/;
function lowerCase(str) {
    return str.toLowerCase();
}
var cache = Object.create(null);
function lowerCaseFirstWord(str, useCache) {
    str = String(str);
    var value;
    return ((useCache && cache[str]) ||
        ((value = str.replace(reFirstWord, lowerCase)), useCache ? (cache[str] = value) : value));
}
exports.lowerCaseFirstWord = lowerCaseFirstWord;
