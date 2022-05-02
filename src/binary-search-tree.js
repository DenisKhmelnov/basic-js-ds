const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    let node = this.root;

    if (node === null) {
      this.root = new Node(data);
    } else searchPlace(node);

    function searchPlace(node) {
      if (data < node.data) {
        if (node.left === null) node.left = new Node(data);
        else searchPlace(node.left);
      } else if (data > node.data) {
        if (node.right === null) node.right = new Node(data);
        else searchPlace(node.right);
      }
    }
  }

  has(data) {
    let node = this.root;

    while (node) {
      if (data === node.data) return true;
      else if (data < node.data) node = node.left;
      else node = node.right;
    }
    return false;
  }

  find(data) {
    let node = this.root;

    while (node) {
      if (data === node.data) return node;
      else if (data < node.data) node = node.left;
      else node = node.right;
    }
    return null;
  }

  remove(data) {
    function removeNode(node, data) {
      if (node == null) return null;
      if (data === node.data) {
        //no children
        if (node.left === null && node.right === null) return null;
        //right cildren
        else if (node.left === null) return node.right;
        //left children
        else if (node.right === null) return node.left;
        //both children
        else {
          let temp = node.right;
          while (temp.left) temp = temp.left;
          //replacing data with top left node data
          node.data = temp.data;
          node.right = removeNode(node.right, temp.data);
        }
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  min() {
    let node = this.root;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
