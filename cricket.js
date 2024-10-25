// Data about the speakers
const speakers = [
    {
        name: "Yochai Benkler",
        title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
        image: "yohai.jpg" // Replace with the actual image path
    },
    {
        name: "SohYeong Noh",
        title: "Director of Art Centre Nabi and a board member of CC Korea",
        description: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
        image: "sohyeong.jpg" // Replace with the actual image path
    }
];

// Function to dynamically generate the HTML for the speakers
function createSpeakersSection() {
    const container = document.getElementById('speakers-container');

    if (!container) {
        console.error('Speakers container element not found!');
        return;
    }

    // Clear the container before adding speakers (useful if the function is called multiple times)
    container.innerHTML = '';

    // Loop through the speakers data
    speakers.forEach(speaker => {
        // Create a div element for each speaker
        const speakerDiv = document.createElement('div');
        speakerDiv.classList.add('speaker');

        // Create the speaker image
        const speakerImage = document.createElement('div');
        speakerImage.classList.add('speaker-image');
        const img = document.createElement('img');
        img.src = speaker.image;
        img.alt = speaker.name;
        speakerImage.appendChild(img);

        // Create the speaker details
        const speakerDetails = document.createElement('div');
        speakerDetails.classList.add('speaker-details');

        // Speaker name
        const speakerName = document.createElement('h3');
        speakerName.textContent = speaker.name;
        speakerDetails.appendChild(speakerName);

        // Speaker title
        const speakerTitle = document.createElement('p');
        speakerTitle.classList.add('title');
        speakerTitle.textContent = speaker.title;
        speakerDetails.appendChild(speakerTitle);

        // Speaker description
        const speakerDesc = document.createElement('p');
        speakerDesc.textContent = speaker.description;
        speakerDetails.appendChild(speakerDesc);

        // Append the image and details to the speaker div
        speakerDiv.appendChild(speakerImage);
        speakerDiv.appendChild(speakerDetails);

        // Append the speaker div to the container
        container.appendChild(speakerDiv);
    });
}

// Call the function to generate the speakers section when the page loads
window.onload = createSpeakersSection;
