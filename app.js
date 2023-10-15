const apiEndpoint = 'https://dog.ceo/api/breeds/image/random';
const apiKey = ''; // No API key needed for a local file

const dogImage = document.getElementById('dog-image');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const likeCountElement = document.getElementById('like-count');
const dislikeCountElement = document.getElementById('dislike-count');
const commentsList = document.getElementById('comments-list');
const commentInput = document.getElementById('comment-input');
const commentForm = document.getElementById('comment-form');
const generateDogButton = document.getElementById('generate-dog');

let likeCount = 0;
let dislikeCount = 0;

// Function to fetch a random dog image from the local JSON file
async function fetchRandomDogImage() {
    try {
        const response = await fetch(apiEndpoint);
        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.message;
            dogImage.src = imageUrl;
        } else {
            throw new Error('Failed to fetch a random dog image');
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to handle liking a dog image
function likeImage() {
    likeCount++;
    updateLikeCount();
}

// Function to handle disliking a dog image
function dislikeImage() {
    dislikeCount++;
    updateDislikeCount();
}

// Function to update the like count display
function updateLikeCount() {
    likeCountElement.textContent = `Likes: ${likeCount}`;
}

// Function to update the dislike count display
function updateDislikeCount() {
    dislikeCountElement.textContent = `Dislikes: ${dislikeCount}`;
}

// Function to add a comment
function addComment(commentText) {
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    commentsList.appendChild(commentItem);
    commentInput.value = ''; // Clear the input field
}

// Function to generate a new random dog image
function generateRandomDog() {
    console.log("Button Clicked"); // Debugging: Check if the button click event is firing
    fetchRandomDogImage();
}

// Event listeners
document.addEventListener('DOMContentLoaded', fetchRandomDogImage);
likeButton.addEventListener('click', likeImage);
dislikeButton.addEventListener('click', dislikeImage);
generateDogButton.addEventListener('click', generateRandomDog);

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText) {
        addComment(commentText);
    }
});
