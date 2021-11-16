# react18
Just testing new React version 18, in beta.

## Started from here

[Public beta announcement](https://github.com/reactwg/react-18/discussions/112)

## The test

### `useId` hook

I'm just curious about what it generates, let's see.

```javascript
const MyInput = () => {
  const id = useId();

  return createElement('input', { id });
}

console.log(renderToString(createElement(MyInput)));
```

It gives me this output: `<input id="R:0"/>`.

Okay, let's try it later on a client side execution!