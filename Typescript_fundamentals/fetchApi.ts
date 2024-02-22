interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchData(url: string): Promise<UserData[]> {
  try {
    const response = await fetch(url);
    // Fetch data from the specified URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: UserData[] = await response.json(); // Parse the JSON response
    // Process the data as needed
    return data; // Return the parsed data
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Re-throw the error to handle it elsewhere
  }
}
console.log( fetchData(`https://jsonplaceholder.typicode.com/users`));
