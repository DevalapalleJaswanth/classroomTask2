import React from 'react';
import './style.css';
import Card from './MyCard';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Card
        img={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'}
        item={'Product'}
        price={'$10.00'}
        sale={"true"}
        rating={'5 star'}
      />
    </div>
  );
}
