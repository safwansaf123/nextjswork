import React from 'react';
import ChildComponent from '../CHILD/page';

function ParentComponent() {
  const message = "Hello from Parent Component!";
  const user = { name: "John Doe", age: 30 };

  return (
    <div>
      <h1>Parent Component i am called in example1 page  </h1>
      <h2>i contain child component</h2>
      <ChildComponent message={message} user={user} />
    </div>
  );
}

export default ParentComponent;
