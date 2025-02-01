import React from 'react';

function ChildComponent(props: { message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; user: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; age: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }; }) {
  return (
    <div>
      <h2>Child Component PROP DATA MADE INSIDE ME </h2>
      <h3>and iam called in parent component</h3>
      <p>{props.message}</p>
      <p>User Name: {props.user.name}</p>
      <p>User Age: {props.user.age}</p>
    </div>
  );
}

export default ChildComponent;
