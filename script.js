// Select elements
    const jokeElement = document.getElementById("joke");
    const button = document.getElementById("btn");

    // Async function to fetch joke
    async function getJoke() {   //async functions are a special type of function in JavaScript that allow you to write asynchronous code in a more synchronous and readable manner. They are defined using the async keyword before the function declaration. Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved, making it easier to work with asynchronous operations like fetching data from an API or performing time-consuming tasks without blocking the main thread.
      try {   //try...catch is a JavaScript statement that allows you to handle errors gracefully. The code inside the try block is executed, and if any error occurs, it is caught by the catch block, where you can handle the error or display an appropriate message to the user. This helps prevent the application from crashing and provides a way to manage unexpected situations effectively.
        // Fetch data from public joke API
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");  //this line is making an HTTP GET request to the specified URL using the fetch() function, which returns a Promise that resolves to the Response object representing the response to the request. The await keyword is used to pause the execution of the getJoke function until the Promise returned by fetch() is resolved, allowing you to work with the response data once it is available without blocking the main thread.


        // Convert response to JSON 
        // JSON: is the javavscript object notation, it is a lightweight data-interchange 
        // format that is easy for humans to read and write, and easy for machines to parse and generate. 
        // It is commonly used for transmitting data between a server and a web application as an alternative to XML. 
        // JSON represents data as key-value pairs, where keys are strings and values can be various data types such as strings, 
        // numbers, arrays, or other JSON objects. In JavaScript, you can use the JSON.parse() 
        // method to convert a JSON string into a JavaScript object, and the JSON.stringify() 
        // method to convert a JavaScript object into a JSON string.
        const data = await response.json();

        // Display joke on page
        jokeElement.innerHTML = `
          <strong>${data.setup}</strong><br><br>  
          ${data.punchline}
        `;

        // This line is using template literals (enclosed in backticks) to create a string that includes the setup
        //  and punchline of the joke. The ${data.setup} and ${data.punchline} syntax allows you to embed the values of 
        // the setup and punchline properties from the data object directly into the string. The resulting string is then 
        // assigned to the innerHTML property of the jokeElement, which updates the content of that element on the page to 
        // display the joke.
      } catch (error) {
        jokeElement.textContent = "Failed to load joke. Try again!";
        console.log(error);
      }
    }
    // fetch() is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use fetch() to perform various types of HTTP requests (GET, POST, etc.) and handle the response data accordingly.

    // Button click event
    button.addEventListener("click", getJoke);