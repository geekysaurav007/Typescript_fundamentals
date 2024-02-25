// Function simulating arriving for the coffee date
function friendArrives(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulate a delay for the crush to arrive (2 seconds)
    setTimeout(() => {
      resolve("Your crush has arrived!");
    }, 2000);
  });
}
// Main function to handle the coffee date
async function handleCoffeeDate() {
  console.log("You're waiting for your crush at the café...");

  try {
    // Initiating the coffee date promise using await
    const message = await friendArrives();
    console.log(message);
    console.log("Enjoy your coffee date!");
  } catch (error) {
    console.error(error);
    console.log("Looks like your coffee date didn't work out this time.");
  }
}
// Initiating the coffee date
handleCoffeeDate();
// Output:-
// You're waiting for your friend at the café...
// Your friend has arrived!
// Enjoy your coffee date!

