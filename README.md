This is the local implementation of the 'my first function' tutorial for Microsoft Azure using Visual Studio Code (https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node). It creates a function triggered by an HTTP request, and responds with a customised message.

First step: clone this repo and run `npm install`.

To get the function to run with the `func start` command within the project directory, your environment should be:
* node 16 or 18
* VS Code with Azure Functions extension
* Azure Functions Core Tools 4.x

Once the function is running locally, either visit the localhost url that will appear in the terminal output (use a `?name="<your name here>"` suffix to add params) or use 'Execute Function Now' on `HttpExample` within the Azure workspace in VS Code and either use the default request body or enter your own.

I have added unit tests to the function, these use the `npm test` command 