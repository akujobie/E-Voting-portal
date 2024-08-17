// Get the voting container, credentials, and results elements
const votingContainer = document.getElementById('voting-Container');
const Credentials = document.getElementById('Credentials');
const results = document.getElementById('results');

// Initialize variables to keep track of total votes, candidate votes, void votes, and voting status
let totalVotes = 0;
let candidate1Votes = 0;
let candidate2Votes = 0;
let candidate3Votes = 0;
let candidate4Votes = 0;
let voidVotes = 0;
let hasVoted = false; // flag variable to keep track of voting status
let votingEnded = false; // flag variable to keep track of voting end status


// Define valid credentials and used credentials arrays
const validCredentials = [
  { username: 'NIN1', passcode: 'DOB1' },
  { username: 'NIN2', passcode: 'DOB2' },
  { username: 'NIN3', passcode: 'DOB3' },
  { username: 'NIN4', passcode: 'DOB4' },
  { username: 'NIN5', passcode: 'DOB5' },
  { username: 'NIN6', passcode: 'DOB6' },
  { username: 'NIN7', passcode: 'DOB7' },
  { username: 'NIN8', passcode: 'DOB8' },
  { username: 'NIN9', passcode: 'DOB9' },
  { username: 'NIN10', passcode: 'DOB10' },
];

// Function to get user credentials
let usedCredentials = [];
function getCredentials() {
  let valid = false;
  let username, passcode;

// Prompt the user for their NIN and DOB
  do {
    username = prompt('Enter your National Identification Number:');
    passcode = prompt('Enter your Date of birth:');

    if (username && passcode) {
      const credential = validCredentials.find(cred => cred.username === username && cred.passcode === passcode);

      if (credential) {
        if (usedCredentials.includes(credential)) { // Check if the credential has been used
          alert('National Identification Number and Date of birth has been used, kindly enter another to vote.');
          continue;
        }
        usedCredentials.push(credential); // Add the used credential to the usedCredentials array
        valid = true;
        Credentials.innerHTML = (`National Identification Number: ${username}\nDate of birth: ${passcode}`);
        votingContainer.style.display = 'block';
        updateResults(); // Update the results after the user enters their credentials
        hasVoted = false; // reset the flag variable
      } else {
        alert('Invalid National Identification Number or Date of birth!');
       
        // hide votingContainer if credentials are not valid
        votingContainer.style.display = 'none';
      }
    } else {
      alert('Please enter both a National Identification Number and Date of birth!');
    }
  } while (!valid);
  
};

// Function to cast a vote for a candidate
function castVote(candidate) {
    if (!hasVoted) { // only allow voting if the user hasn't voted yet
    totalVotes++;
    if (candidate === 'candidate1') {
        candidate1Votes++;
    } else if (candidate === 'candidate2') {
        candidate2Votes++;
    } else if (candidate === 'candidate3') {
        candidate3Votes++;
    } else if (candidate === 'candidate4') {
        candidate4Votes++;
    } 
    updateResults();
    hasVoted = true; // set the flag variable to true after voting
    }
};

// Function to cast a void vote
function castVoidVote() {
    if (!hasVoted) { // only allow voting if the user hasn't voted yet
    totalVotes++;
    voidVotes++;
    updateResults();
    hasVoted = true; // set the flag variable to true after voting
}
};

// Function to update the results display
function updateResults() {
    document.getElementById('totalVotes').innerHTML = totalVotes;
    document.getElementById('candidate1Votes').innerHTML = candidate1Votes;
    document.getElementById('candidate2Votes').innerHTML = candidate2Votes;
    document.getElementById('candidate3Votes').innerHTML = candidate3Votes;
    document.getElementById('candidate4Votes').innerHTML = candidate4Votes;
    document.getElementById('voidVotes').innerHTML = voidVotes;
    results.style.display = 'block';
};

// Function to end voting
function endVoting() {
  // Hide the voting buttons and display the results
  votingContainer.style.display = 'block'
  results.style.display = 'block'
  votingEnded = true;
};

// Add an event listener to the end voting button
document.getElementById('endVoting').addEventListener('click', 
    function() {
    document.getElementById('voting-Container').style.display = 'none';
  });