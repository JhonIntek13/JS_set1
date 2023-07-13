class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}
const root = new TreeNode("A", [
  new TreeNode("a", [
    new TreeNode("aa")
  ]),
  new TreeNode("b", [
    new TreeNode("ba"),
    new TreeNode("bb")
  ]),
  new TreeNode("c", [
    new TreeNode("ca"),
    new TreeNode("cb", [
      new TreeNode("cba")
    ])
  ])
]);

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
