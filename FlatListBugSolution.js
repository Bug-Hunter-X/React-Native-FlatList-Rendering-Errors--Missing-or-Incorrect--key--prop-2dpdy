The solution is straightforward: provide a unique `key` prop to each item in your data array. This key should be a unique identifier for each item and must not change over time for the same item.  Here's how to correct the code:

```javascript
// Correct implementation
<FlatList
  data={data}
  renderItem={({ item }) => (
    <Text key={item.id}>{item.text}</Text> // Use unique item.id as key
  )}
/>

// Example data with unique IDs
const data = [
  {id: '1', text: 'Item 1'},
  {id: '2', text: 'Item 2'},
  {id: '3', text: 'Item 3'}
];
```

Ensure that the chosen `key` is consistently unique for each item and remains stable even as the data is updated. Using an index as a key can cause issues if the array is reordered or items are added/removed.