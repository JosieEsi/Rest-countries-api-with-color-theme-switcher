console.log('My code......');

// Assuming you're working in a TypeScript file (e.g., script.ts)

// Define an interface to represent the structure of the API response
interface Country {
    name: string;
    capital: string;
    population: number;
    // Add more properties as needed
  }
  
  // Function to fetch data from the API
  async function fetchData(): Promise<void> {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: Country[] = await response.json();
      
      // Now you can use the 'data' variable which contains the parsed JSON response
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the fetchData function
  fetchData();
  