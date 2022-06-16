const users = [{
  name: "Jim",
  color: "blue"
},
{
  name: "Sam",
  color: "blue"
},
{
  name: "Eddie",
  color: "green"
},
{
  name: "Robert",
  color: "green"
}];


const groupBy = (arr, key) => {
  return arr.reduce((acc, cur) => {
    // é possível pegar o valor assim obj.name ou assim obj['name'] em js
    const attr = cur[key];        

    // Example 1
    acc[attr] = [...(acc[attr] || []), cur];        

    // Example 2
    // acc[attr] = acc[attr] || [];
    // acc[attr].push(cur);

    return acc;
  }, {}); 
  // initialValue: {} A value to be passed to the function as the initial value.
  // A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, 
  // that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, 
  // previousValue is initialized to the first value in the array, and currentValue is initialized to the second value 
  // in the array.
};

const res = groupBy(users, 'color');
console.log('group by:', res);