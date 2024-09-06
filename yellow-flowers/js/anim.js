// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "AT THE TIME", time: 15 },
  { text: "THE WHISPER OF BIRDS", time: 18 },
  { text: "LONELY BEFORE THE SUN CRIED", time: 27 },
  { text: "FELL FROM THE SKY", time: 32 },
  { text: "LIKE WATER DROPS", time: 33 },
  { text: "WHERE I'M NOW? I DON'T KNOW WHY", time: 41 },
  { text: "NICE BUTTERFLIES IN MY HANDS", time: 47 },
  { text: "TOO MUCH LIGHT FOR TWILIGHT", time: 54 },
  { text: "IN THE MOOD FOR THE FLOWERS LOVE", time: 59 },
  { text: "THAT VISION", time: 67 },
  { text: "REALLY STRONG, BLEW MY MIND", time: 72 },
  { text: "SILENCE LET ME SEE WHAT IT WAS", time: 78 },
  { text: "I ONLY WANT TO LIVE IN CLOUDS", time: 83 },
  { text: "WHERE I'M NOW? I DON'T KNOW WHY", time: 91 },
  { text: "NICE BUTTERFLIES IN MY HANDS", time: 97 },
  { text: "TOO MUCH LIGHT FOR TWILIGHT", time: 104 },
  { text: "IN THE MOOD FOR THE FLOWERS LOVE", time: 108 },
  { text: "AT THE TIME", time: 144 },
  { text: "THE WHISPER OF BIRDS", time: 148 },
  { text: "LONELY BEFORE THE SUN CRIED", time: 153 },
  { text: "FELL FROM THE SKY", time: 158 },
  { text: "LIKE WATER DROPS", time: 164 },
  { text: "WHERE I'M NOW? I DON'T KNOW WHY", time: 169 },
  { text: "NICE BUTTERFLIES IN MY HANDS", time: 176 },
  { text: "TOO MUCH LIGHT FOR TWILIGHT", time: 183 },
  { text: "IN THE MOOD FOR THE FLOWERS", time: 188 },
  { text: "LOVE...", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);