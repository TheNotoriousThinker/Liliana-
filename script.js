let timeLeft = 5400; // 90 minutos en segundos
let progress = 0;

const countdownElement = document.getElementById("countdown");
const progressBar = document.getElementById("progress");

// Iniciar cuenta regresiva
function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateCountdown, 1000);
  } else {
    countdownElement.textContent = "¡Tiempo agotado!";
  }
}

// Actualizar la barra de progreso
function updateProgress(value) {
  progress += value;
  progressBar.style.width = `${progress}%`;
  if (progress >= 100) {
    alert("¡Felicidades! Han completado el desafío.");
  }
}

// Mostrar secciones
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
}

// Análisis de código
function analyzeCode() {
  const fileInput = document.getElementById("code-upload");
  const resultElement = document.getElementById("code-result");
  if (fileInput.files.length > 0) {
    resultElement.textContent = "Código escaneado: 3 vulnerabilidades detectadas.";
    updateProgress(20);
  } else {
    resultElement.textContent = "Por favor, sube un archivo de código.";
  }
}

// Métricas de calidad
function checkComplexity() {
  const input = document.getElementById("complexity-input");
  const resultElement = document.getElementById("metrics-result");
  if (input.value === "2") {
    resultElement.textContent = "¡Correcto! Complejidad ciclomática calculada.";
    updateProgress(30);
  } else {
    resultElement.textContent = "Incorrecto. Intenta de nuevo.";
  }
}

// IA Training
function startTraining() {
  const statusElement = document.getElementById("training-status");
  const resultElement = document.getElementById("ai-result");

  // Simula el proceso de entrenamiento
  statusElement.textContent = "Cargando datos...";
  setTimeout(() => {
    statusElement.textContent = "Entrenando modelo...";
    setTimeout(() => {
      statusElement.textContent = "Evaluando precisión...";
      setTimeout(() => {
        const accuracy = simulateModelTraining();
        resultElement.textContent = `Modelo entrenado con ${accuracy}% de precisión.`;

        if (accuracy >= 90) {
          updateProgress(50);
          alert("¡Modelo entrenado con éxito! Clave desbloqueada: QUALITY42");
        }
      }, 2000); // Simula la evaluación
    }, 2000); // Simula el entrenamiento
  }, 2000); // Simula la carga de datos
}

function simulateModelTraining() {
  const accuracy = Math.floor(Math.random() * 21) + 80;
  return accuracy;
}

// Iniciar
updateCountdown();