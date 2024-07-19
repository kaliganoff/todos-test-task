async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const result = await response.json();
  return result;
}

export default getData;
