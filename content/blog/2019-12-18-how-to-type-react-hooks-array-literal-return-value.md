---
title: How to Add Typescript Annotations to React Hooks Array Literal Return Value
date: 2019-12-19T02:46:40.994Z
description: Small trick to adding Typescript types to React Hooks
---


```js
const useStuff = () => {
  const [stuff, setStuff] = useState();
  
  // some magic happens

  return [stuff, setStuff, moreStuff];
}
```