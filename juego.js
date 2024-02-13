const questions = [
    {
      question: "Día en que nos hicimos novios...",
      options: ["12-09-23", "02-10-23", "22-09-23", "02-09-23"],
      correctAnswer: "02-09-23"
    },
    {
      question: "¿Dónde fue nuestra primera cita?",
      options: ["En la universidad", "En una fiesta", "En un parque", "En un café"],
      correctAnswer: "En un parque"
    },
    {
        question: "¿Cuál fue el primer regalo que me diste?",
        options: ["Taza y rosas", "Cautín", "Tu compañía", "Peluche"],
        correctAnswer: "Taza y rosas"
      },
    {
      question: "¿Lugar del primer beso?",
      options: ["En el parque", "En una fiesta", "En la terminal ABC", "En la playa"],
      correctAnswer: "En una fiesta"
    },
    {
        question: "¿Dónde fue nuestra primera foto juntos?",
        options: ["En la playa", "En el malecón", "En el estacionamiento del Walmart", "En Tijuana"],
        correctAnswer: "En el estacionamiento del Walmart"
      },
    {
      question: "¿Cuál fue el primer regalo que te di?",
      options: ["Flor en maceta morada", "Corazón de LED's", "Mi compañía", "Dulces"],
      correctAnswer: "Corazón de LED's"
    },
    {
        question: "¿Qué es lo que más nos gusta hacer juntos?",
        options: ["Ver cualquier cosa en la compu", "Salir a comer", "Estar acostados", "Todas las anteriores"],
        correctAnswer: "Todas las anteriores"
      },
      {
        question: "¿Qué apodo cariñoso te digo?",
        options: ["Mi preciosa", "Mi princesa", "Mi negrita", "Mi amorcito"],
        correctAnswer: "Mi preciosa"
      },
    {
        question: "¿Cuál es mi actividad favorita para hacer juntos en casa?",
        options: ["Estar tirados", "Escuchar música", "Ver TikToks", "Jugar LoL"],
        correctAnswer: "Estar tirados"
      },
    {
        question: "¿Cuál es mi postre favorito?",
        options: ["Pay", "Pastel", "Flan", "Chocoflan"],
        correctAnswer: "Flan"
      },
        {
        question: "Lugar en que nos hicimos novios",
        options: ["En el parque", "En el malecón", "En la playa", "Estacionamiento del Walmart"],
        correctAnswer: "Estacionamiento del Walmart"
      },
    {
        question: "¿Cuál es mi lugar favorito en el mundo?",
        options: ["Mi cuarto", "La playa", "El trabajo", "Tus brazos"],
        correctAnswer: "Tus brazos"
      },
    {
        question: "¿Cuál es mi comida favorita?",
        options: ["Mole", "Pastas", "Hamburguesas", "Todas las anteriores"],
        correctAnswer: "Todas las anteriores"
      },
    {
        question: "¿Cuál es mi deporte o actividad física favorita?",
        options: ["Salir a correr", "Saltos de cuerda", "Pesas", "Ninguna de las anteriores"],
        correctAnswer: "Saltos de cuerda"
      },
        {
        question: "¿Cuál es mi manga favorito?",
        options: ["One Punch Man", "Berserk", "Haikyuu", "Kingdom"],
        correctAnswer: "Kingdom"
      },
        {
        question: "¿Qué es lo que más me gusta hacer en mi tiempo libre?",
        options: ["Salir a correr", "Ver películas", "Escuchar música", "Leer manga"],
        correctAnswer: "Escuchar música"
      },
        {
        question: "¿Cuál es mi banda favorita?",
        options: ["Sleeping With Sirens", "Silverstein", "Alesana", "Falling In Reverse"],
        correctAnswer: "Alesana"
      },
        {
        question: "¿Cuál es mi color favorito?",
        options: ["Amarillo", "Rojo sangre", "Negro", "Blanco"],
        correctAnswer: "Negro"
      },
        {
        question: "¿Cuál es mi serie de televisión favorita?",
        options: ["Breaking Bad", "Spartacus", "How I Met Your Mother", "Todas las anteriores"],
        correctAnswer: "Todas las anteriores"
      },
        {
        question: "¿Cuál es mi estilo de música favorito?",
        options: ["Rock", "Metal", "Reguetón", "Electrónica"],
        correctAnswer: "Metal"
      },
        {
        question: "Quién quiere más a quién",
        options: ["Oscar a Damaris", "Oscar a Damaris", "Oscar a Damaris", "Oscar a Damaris"],
        correctAnswer: "Oscar a Damaris"
      },
      {
        question: "Quién ama más a quién",
        options: ["Oscar a Damaris", "Oscar a Damaris", "Oscar a Damaris", "Oscar a Damaris"],
        correctAnswer: "Oscar a Damaris"
      },
      {
        question: "Quién está más enamorado",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién cocina mejor",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más romántico",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más espontáneo",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más organizado",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más creativo",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más detallista",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más cariñoso",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      },
      {
        question: "Quién es más gracioso",
        options: ["Oscar", "Oscar", "Oscar", "Oscar"],
        correctAnswer: "Oscar"
      }
      ];

       let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  const resultElement = document.getElementById("result");
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      resultElement.textContent = "¡Respuesta correcta!";
    } else {
      resultElement.textContent = "Respuesta incorrecta";
    }
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      resultElement.textContent = "";
      nextButton.style.display = "none";
    } else {
      endGame();
    }
  });
  
  function endGame() {
    questionElement.textContent = `¡Fin del juego! Tu puntuación es ${score}/${questions.length}.`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
  }
    
  displayQuestion();
  