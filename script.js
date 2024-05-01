document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch numbers from the API
    async function fetchNumbers(numberId) {
      try {
        const response = await axios.get(`http://test-server-api/numbers/${numberId}`);
        return response.data.numbers;
      } catch (error) {
        console.error('Error fetching numbers:', error);
        return [];
      }
    }
  
    // Function to calculate average of numbers
    function calculateAverage(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }
  
    // Function to display output
    function displayOutput(beforeNumbers, afterNumbers, average) {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `
        <h2>Before Numbers: ${beforeNumbers.join(', ')}</h2>
        <h2>After Numbers: ${afterNumbers.join(', ')}</h2>
        <h2>Average: ${average}</h2>
      `;
    }
  
    // Main function to handle API request
    async function handleAPIRequest(numberId) {
      const beforeNumbers = []; // Numbers stored before latest API call
      const afterNumbers = []; // Numbers stored after latest API call
  
      // Fetch numbers from the API
      const newNumbers = await fetchNumbers(numberId);
      if (newNumbers.length === 0) return;
  
      // Merge new numbers with existing numbers
      afterNumbers.push(...newNumbers);
  
      // Calculate average
      const average = calculateAverage(afterNumbers);
  
      // Display output
      displayOutput(beforeNumbers, afterNumbers, average);
    }
  
    // Example usage: Handle API request for number ID 'p' (prime numbers)
    handleAPIRequest('p');
  });
  