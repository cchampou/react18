# react18
Just testing new React version 18, in beta.

## Started from here

[Public beta announcement](https://github.com/reactwg/react-18/discussions/112)

## The tests

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

... *[A few moments later](https://www.youtube.com/watch?v=-2Z0Y3Kk8nU)*

I just added [Vite](https://vitejs.dev/) as a bundler in a few minutes to have a webpage
rendering my React code.

```html
<div id="app"><input id="r:0"></div>
```

Seems like it's going to be consistent.

## Let's server side render