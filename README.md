# react-router-forward

## About
If you're like me you forget the API for getting URL params from routes in `react-router`.

Arguably it's pretty simple now with the introduction of `useParams()` but I still think it'd be easier to just forward the params prop to the child component automatically.

Enter `<ForwardRoute>`:

```
SomeComponent = <h1>The param: {props.urlParam}</h1>

<Route path="/some/:urlParam">
  <ForwardRoute>
    <SomeComponent />
  </ForwardRoute>
</Route>
```
