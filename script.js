document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    const feedbackDisplay = document.getElementById("feedback-display");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const name = document.getElementById("name").value.trim();
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comments").value.trim();

        if (name === "" || rating === "" || comments === "") {
            alert("All fields are required");
            return;
        }

        const feedbackItem = document.createElement("div");
        feedbackItem.classList.add("feedback-item");

        const feedbackName = document.createElement("h3");
        feedbackName.textContent = "Name:" + name;

        const feedbackRating = document.createElement("p");
        feedbackRating.textContext = "Rating:" + rating;

        const feedbackComments = document.createElement("P");
        feedbackComments.textContext = "Comments:" + comments;




    }
}