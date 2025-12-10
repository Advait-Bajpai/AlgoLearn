import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const insertRef = useRef(null);
  const removeRef = useRef(null);
  const searchRef = useRef(null);
  const randomRef = useRef(null);

  const insert = () => {
    props.insert(insertRef.current.value);
  };

  const remove = () => {
    props.remove(removeRef.current.value);
  };

  const search = () => {
    props.search(searchRef.current.value);
  };

  const random = () => {
    props.random(randomRef.current.value);
  };

  const clear = () => {
    props.random(0);
  };

  const baseInput =
    'w-24 sm:w-28 md:w-32 rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500';

  const baseBtn =
    'rounded-md border px-3 py-1 text-sm font-medium transition-colors';

  return (
    <nav className="w-full bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center text-slate-300 hover:text-white">
          <span className="text-xl">{'◀'}</span>
        </Link>

        <div className="text-lg font-semibold tracking-tight">
          BST{' '}
          <span className="font-bold text-indigo-400">
            Visualizer
          </span>
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-3">
          {/* Insert */}
          <div className="flex items-center gap-2">
            <input
              className={baseInput}
              placeholder="Insert"
              ref={insertRef}
              type="number"
              onKeyUp={(e) => {
                if (e.key === 'Enter') insert();
              }}
            />
            <button
              onClick={insert}
              className={`${baseBtn} border-emerald-500 text-emerald-300 hover:bg-emerald-500/10`}
            >
              Insert
            </button>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <input
              placeholder="Search"
              type="number"
              ref={searchRef}
              onKeyUp={(e) => {
                if (e.key === 'Enter') search();
              }}
              className={`${baseInput} ${props.seaError || ''}`}
            />
            <button
              onClick={search}
              className={`${baseBtn} border-sky-500 text-sky-300 hover:bg-sky-500/10`}
            >
              Search
            </button>
          </div>

          {/* Delete */}
          <div className="flex items-center gap-2">
            <input
              placeholder="Delete"
              ref={removeRef}
              type="number"
              onKeyUp={(e) => {
                if (e.key === 'Enter') remove();
              }}
              className={`${baseInput} ${props.delError || ''}`}
            />
            <button
              onClick={remove}
              className={`${baseBtn} border-rose-500 text-rose-300 hover:bg-rose-500/10`}
            >
              Delete
            </button>
          </div>

          {/* Random */}
          <div className="flex items-center gap-2">
            <input
              className={baseInput}
              placeholder="Node count"
              type="number"
              ref={randomRef}
              onKeyUp={(e) => {
                if (e.key === 'Enter') random();
              }}
            />
            <button
              onClick={random}
              className={`${baseBtn} border-amber-500 text-amber-300 hover:bg-amber-500/10`}
            >
              Random
            </button>
          </div>

          {/* Clear */}
          <div className="flex items-center">
            <button
              onClick={clear}
              className={`${baseBtn} border-slate-500 text-slate-300 hover:bg-slate-500/10`}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
