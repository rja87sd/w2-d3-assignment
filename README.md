# Instructions  
## Part 1: Fetching Data with useEffect  
### Create a New Component:  
  
- In your project's components directory, create a file named StarWarsCharacter.js.  
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/8ff4bf37-68d4-49cb-a290-1862a644de63)  
  
- This component will be responsible for fetching data about a specific Star Wars character from the SWAPI.
  
### Implement Data Fetching Logic:  
  
- Use the useEffect hook to initiate the data fetch when the component mounts.  
- Fetch character data from https://swapi.dev/api/people/{id}/, where {id} is the ID of a Star Wars character you choose.
- Manage the fetched data's state, the loading state, and any errors that might occur during the fetch operation using useState. 
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/0c8d530a-811d-497a-a509-823d4fb60f38)
    
## Part 2: Managing Loading and Error States  
### Implement Loading State:  
  
- Introduce a boolean state variable to track the loading status of the API request.
- While data is being fetched, display a "Loading..." message in your component.
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/5f2abc0c-a9a1-4e49-a648-afa05098fd4b)  
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/4e0703be-7b28-4dec-a9dd-e1402e98b656)  
  
### Implement Error Handling:  
  
- Use a try-catch block inside your data fetching function to handle any errors during the fetch operation.
- Store any errors in a state variable, and display an error message in your component if an error is caught.
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/eab7920c-db49-43cd-93b1-05ae978255f7)
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/452ba2ec-16e8-46b2-8ef0-ee7cdeab37d6)  
  
## Part 3: Displaying Fetched Data  
  
- Once the data is successfully fetched and the component's state is updated, display the Star Wars character's name and any other relevant information you wish to include (e.g., birth year, eye color).
![image](https://github.com/rja87sd/w2-d3-assignment/assets/145504216/d56a8e42-bb44-41b6-b8c8-2d71fb215d34)  
  
## Part 4: GitHub Repository Update  
### Commit Your Changes:  
  
- Make sure all changes are committed to your Git repository with descriptive commit messages.
  
### Push to GitHub:  
  
- Push your latest commits to your GitHub repository to ensure your project is up-to-date online.
  
## Part 5: Submission  
### Submit Your GitHub Repository URL:  
  
- Provide the URL to your GitHub repository that contains the StarWarsCharacter component as your assignment submission.
