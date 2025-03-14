document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to the 96 Movie Fan Page!");

    // Smooth Scroll for Navigation
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Dynamic Year Display in Footer
    const footerYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    footer.textContent = `© ${footerYear} Movie 96 Fan Page`;

    // Image Modal Functionality
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = image.src;
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Movie Quiz Functionality
    const quizData = [
        {
            question: "Who plays the character Ram in the movie '96'?",
            options: ["Vijay Sethupathi", "Dhanush", "Sivakarthikeyan", "Vikram"],
            answer: "Vijay Sethupathi"
        },
        {
            question: "What is the main theme of the movie '96'?",
            options: ["Action", "Nostalgia and Love", "Comedy", "Horror"],
            answer: "Nostalgia and Love"
        },
        {
            question: "Who directed the movie '96'?",
            options: ["C. Prem Kumar", "Atlee", "Mani Ratnam", "Gautham Menon"],
            answer: "C. Prem Kumar"
        },
        {
            question: "What is the name of Trisha's character in '96'?",
            options: ["Jaanu", "Meera", "Anjali", "Sita"],
            answer: "Jaanu"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        document.getElementById("question").innerText = currentQuestion.question;
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("option-button");
            button.addEventListener("click", () => selectOption(option));
            optionsContainer.appendChild(button);
        });

        document.getElementById("next-button").style.display = "none";
    }

    function selectOption(selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            score++;
        }
        document.getElementById("next-button").style.display = "block";
    }

    document.getElementById("next-button").addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        document.getElementById("quiz-container").style.display = "none";
        const resultContainer = document.getElementById("result");
        resultContainer.style.display = "block";
        resultContainer.innerText = `You scored ${score} out of ${quizData.length}!`;
    }

    // Load the first question when the page loads
    loadQuestion();
});