---
title: The Only Time You Should Ever Put Props Into State
date: 2020-05-05T03:13:07.703Z
description: You should absolutely NEVER put your props into your state...except
  for this one reason.
---
Everyone knows you should never ever put the `props` your Component receives into the local `state` of that Component. For example:

```js
constructor(props) {
 super(props);
 // Don't do this!
 this.state = { color: props.color };
}

// Or, with Hooks
const [foo, setfoo] = useState(props.boppety); // Don't do this, either!
```

#### Why Do People Do This?

The primary reason I see developers doing this is a simple misunderstanding of the point of React. I hate to get into the weeds about how things work. I usually like to be a driver, not a mechanic. 

The whole point of React is that you update your `state` and your User Interface re-renders to reflect that new `state`. If you are not old af like me and/or have never done much vanilla Javascript, this may not seem that big of a deal...but it is. It really is.

My guess is that developers new to React don't realize that by simply using `state` and `props` as-is, React will do all the dirty work for you. You don't have to put the `props` into the `state` to keep the party going.

#### Why Shouldn't You Do This?

As stated in the React docs, putting your `props `into your `state `not only creates bugs, but state updates will no longer be reflected in that prop.