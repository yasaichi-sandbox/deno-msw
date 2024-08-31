import { server } from './mocks/server.ts';

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
  const response = await fetch('https://example.com/user');
  const user = await response.json();
  console.log(user);
}

app();
