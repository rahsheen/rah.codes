---
title: How to Type React Hooks Array Literal Return Value
date: 2020-04-26T04:59:13.809Z
description: Small trick to adding Typescript types to React Hooks
---


```
const useStuff = () => {  const [stuff, setStuff] = useState();   // some magic happens  return [stuff, setStuff, moreStuff];}
```
