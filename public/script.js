// ANIMACIÓN DE CARGA (OJOS)
gsap.to("#load-ojo-izq, #load-ojo-der", {
  scaleY: 0.1,
  transformOrigin: "center",
  duration: 0.001,
  repeat: -1,
  yoyo: true,
  repeatDelay: 1
});

// SIMULACIÓN DE CARGA
setTimeout(() => {
  gsap.to("#loading-screen", {
    duration: 1,
    opacity: 0,
    onComplete: () => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }
  });

  gsap.from("#robot", {
    duration: 1.5,
    y: -200,
    opacity: 0,
    ease: "bounce"
  });
}, 3000);


// ANIMACIÓN DEL ROBOT

gsap.to("#robot", {
  y: -10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Variables y reconocimiento
const micBtn = document.querySelector(".mic-btn");
const processingOverlay = document.getElementById("processing-overlay");
const responseBox = document.getElementById("response-data");
const responseText = document.getElementById("response-text");
const closeResponse = document.getElementById("close-response");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Tu navegador no soporta reconocimiento de voz 😢. Usa Google Chrome.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-MX';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  // Lista de amigos registrados con wallet
  const friendsWallets = {
    "julio": "https://ilp.interledger-test.dev/platziandres",
    "denise": "https://ilp.interledger-test.dev/denj",
    "axel": "https://ilp.interledger-test.dev/axellmx ",
  };

  let listening = false;
  let lastTranscript = "";

  micBtn.addEventListener("click", () => {
    if (!listening) {
    
      listening = true;
      lastTranscript = "";
      micBtn.classList.add("mic-btn-active");

      gsap.to("#robot", {
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      });

      showToast("🎤 Escuchando...");
      recognition.start();

    } else {
      // Detener reconocimiento y procesar
      listening = false;
      micBtn.classList.remove("mic-btn-active");
      recognition.stop();

      showProcessing();
      showToast("🤖 Procesando...");

      setTimeout(async () => {
        if (lastTranscript) {
          console.log("Texto reconocido:", lastTranscript);

          // Regex para detectar comando
          const transferRegex = /transfiere\s+(\d+(?:\.\d+)?)\s*pesos?\s+a\s+([a-záéíóúñ]+)/i;
          const match = lastTranscript.match(transferRegex);

          if (match) {
            const amount = match[1];
            const friendName = match[2].toLowerCase();

            if (!friendsWallets[friendName]) {
              showToast(`⚠️ No se encontró a "${friendName}" en amigos registrados`, true);
              hideProcessing();
              return;
            }

            try {
              const res = await fetch("http://localhost:3000/api/transfer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, friendName }),
              });

              const data = await res.json();

              if (!res.ok) {
                throw new Error(data.error || "Error en la transferencia");
              }

              showResponseData({
                Mensaje: data.message || "Autoriza la transferencia en la nueva ventana",
                "Monto enviado": `$${amount} MXN`,
                Estado: "Pendiente de autorización",
              });

              showToast("✅ Abriendo autorización...");

              setTimeout(() => {
                window.open(data.redirectUrl, "_blank");
              }, 1000);

            } catch (error) {
              showToast("❌ Error en la transferencia", true);
              showResponseData({ Error: error.message });
              console.error("❌ Transferencia fallida:", error);
            }
          } else {
            // No es comando válido, mostrar transcripción
            showResponseData({ Transcripción: lastTranscript });
            showToast("✅ Texto capturado");
          }
        } else {
          showToast("⚠️ No se capturó texto", true);
        }

        hideProcessing();
      }, 1000);
    }
  });

  recognition.onresult = (event) => {
    lastTranscript = event.results[0][0].transcript;
    console.log("Texto reconocido (guardado):", lastTranscript);
  };

  recognition.onerror = (event) => {
    console.error("Error:", event.error);
    showToast("❌ Error de voz: " + event.error, true);
    hideProcessing();
    listening = false;
    micBtn.classList.remove("mic-btn-active");
  };

  recognition.onend = () => {
  };
}

closeResponse.addEventListener("click", () => {
  hideResponseData();
});

function showProcessing() {
  processingOverlay.classList.remove("hidden");
}

function hideProcessing() {
  processingOverlay.classList.add("hidden");
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.color = isError ? "#ff3399" : "#00ffcc";
  toast.style.boxShadow = isError
    ? "0 0 10px #ff3399, 0 0 20px #ff3399"
    : "0 0 10px #00ffcc, 0 0 20px #00ffcc";

  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000);
}

function showResponseData(data) {
  responseText.textContent = JSON.stringify(data, null, 2);
  responseBox.classList.remove("hidden");
}

function hideResponseData() {
  responseBox.classList.add("hidden");
}
