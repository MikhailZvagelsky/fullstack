# 1.10: unicafe step5
Let's continue refactoring the application. Extract the following two components:

- Button for defining the buttons used for submitting feedback
- StatisticLine for displaying a single statistic, e.g. the average score.

To be clear: the StatisticLine component always displays a single statistic,
meaning that the application uses multiple components for rendering 
all of the statistics:

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```

The application's state should still be kept in the root App component.
