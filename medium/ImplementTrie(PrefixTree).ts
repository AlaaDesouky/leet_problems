/**
 * Id: 208
 * Name: Implement Trie (Prefix Tree)
 * Link: https://leetcode.com/problems/implement-trie-prefix-tree
 */

class TrieNode {
  children: Map<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.endOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert = (word: string): void => {
    let cur: TrieNode = this.root;

    for (let c of word) {
      if (!cur.children[c]) cur.children[c] = new TrieNode();
      cur = cur.children[c];
    }
    cur.endOfWord = true;
  };

  search = (word: string): boolean => {
    let cur: TrieNode = this.root;
    for (let c of word) {
      if (!cur.children[c]) return false;
      cur = cur.children[c];
    }
    return cur.endOfWord;
  };

  startsWith = (prefix: string): boolean => {
    let cur: TrieNode = this.root;
    for (let c of prefix) {
      if (!cur.children[c]) return false;
      cur = cur.children[c];
    }
    return true;
  };
}
