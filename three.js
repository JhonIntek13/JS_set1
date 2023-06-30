class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  // Create the tree structure
  const root = new TreeNode("A");
  const nodeA = new TreeNode("a");
  const nodeB = new TreeNode("b");
  const nodeC = new TreeNode("c");
  const nodeAA = new TreeNode("aa");
  const nodeBA = new TreeNode("ba");
  const nodeBB = new TreeNode("bb");
  const nodeCA = new TreeNode("ca");
  const nodeCB = new TreeNode("cb");
  const nodeCBA = new TreeNode("cba");
  
  root.addChild(nodeA);
  root.addChild(nodeB);
  root.addChild(nodeC);
  
  nodeA.addChild(nodeAA);
  
  nodeB.addChild(nodeBA);
  nodeB.addChild(nodeBB);
  
  nodeC.addChild(nodeCA);
  nodeC.addChild(nodeCB);
  
  nodeCB.addChild(nodeCBA);
  
  function displayTreeElements(node, indent = "") {
    const hasChildren = node.children.length > 0;
    console.log(`${indent}${hasChildren ? "|--" : "|--"} ${node.value}`);
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const isLastChild = i === node.children.length - 1;
      const newIndent = indent + (hasChildren ? (isLastChild ? "   " : "|  ") : "   ");
      displayTreeElements(child, newIndent);
    }
  }
  
  displayTreeElements(root);
  