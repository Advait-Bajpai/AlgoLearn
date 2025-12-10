import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BSTree from './BSTree';
import useDelError from './useDelError';
import useTraversal from './useTraversal';
import './BST.css';

const BST = () => {
  const [tree, setTree] = useState();
  const [treeHtml, setTreeHtml] = useState();
  const [delError, setDelError] = useDelError(treeHtml);
  const [searchError, setSearchError] = useDelError(treeHtml);
  const [traversalList, traversalDispatch] = useTraversal(tree);

  useEffect(() => {
    const tempTree = new BSTree();
    setTree(tempTree);

    return () => {
      setTree(null);
      setTreeHtml(null);
    };
  }, []);

  const insert = (val) => {
    if (!tree) return;

    let value = parseInt(val, 10);
    if (Number.isNaN(value)) return;

    const tempTree = tree;
    tempTree.insert(value);
    setTree(tempTree);

    if (tempTree.root) setTreeHtml(tempTree.root.html);
    traversalDispatch('clear');
  };

  const remove = (val) => {
    if (!tree) return;

    let value = parseInt(val, 10);
    if (Number.isNaN(value)) return;

    const tempTree = tree;
    setDelError(false);

    if (!tempTree.search(value)) {
      setDelError(true);
      return;
    }

    tempTree.remove(value);
    setTree(tempTree);

    if (tempTree.root) setTreeHtml(tempTree.root.html);
    else setTreeHtml(null);

    traversalDispatch('clear');
  };

  const search = (val) => {
    if (!tree) return;

    let value = parseInt(val, 10);
    if (Number.isNaN(value)) return;

    const tempTree = tree;
    setSearchError(false);

    const found = tempTree.search(value);
    if (!found) {
      setSearchError(true);
      return;
    }

    setTree(tempTree);
    if (tempTree.root) setTreeHtml(tempTree.root.html);
    else setTreeHtml(null);
  };

  const random = (num) => {
    let value = parseInt(num, 10);
    if (Number.isNaN(value) || value < 0) return;

    const tempTree = new BSTree(value);
    setTree(tempTree);

    if (value && tempTree.root) setTreeHtml(tempTree.root.html);
    else setTreeHtml(null);

    traversalDispatch('clear');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 justify-center items-center">
      <Navbar
        insert={insert}
        remove={remove}
        search={search}
        random={random}
        delError={delError ? 'error' : ''}
        seaError={searchError ? 'error' : ''}
      />

      {/* Traversal result list (top) */}
      <div className="traversal">
        {traversalList.list.length ? (
          <ul>
            {traversalList.op}:
            {traversalList.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No Traversal Performed</p>
        )}
      </div>

      {/* Tree itself */}
      <div className="tree items-center">
        <ul>{treeHtml}</ul>
      </div>

      {/* Traversal controls */}
      <div className="traversal-pannel">
        <div>
          <button
            onClick={() => traversalDispatch('inorder')}
            className="rounded-md border border-sky-500 px-3 py-1 text-sm font-medium text-sky-300 hover:bg-sky-500/10 transition-colors"
          >
            Inorder
          </button>
        </div>
        <div>
          <button
            onClick={() => traversalDispatch('preorder')}
            className="rounded-md border border-sky-500 px-3 py-1 text-sm font-medium text-sky-300 hover:bg-sky-500/10 transition-colors"
          >
            Preorder
          </button>
        </div>
        <div>
          <button
            onClick={() => traversalDispatch('postorder')}
            className="rounded-md border border-sky-500 px-3 py-1 text-sm font-medium text-sky-300 hover:bg-sky-500/10 transition-colors"
          >
            Postorder
          </button>
        </div>
      </div>
    </div>
  );
};

export default BST;
