import { memo } from 'react';

const App = () => (
  <div className="flex justify-center items-center h-screen bg-indigo-500">
    <h1 className="text-3xl font-bold uppercase text-white">
      Little boilerplate :D
    </h1>
  </div>
);

export default memo(App);
