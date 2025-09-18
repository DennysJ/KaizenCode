# Kaizen App
Aplicación experimental que convierte comandos de voz en **transacciones financieras**, usando tecnologías de reconocimiento de voz, APIs de backend y protocolos abiertos de pagos. 

Experimental application that converts voice commands into **financial transactions**, using speech recognition technologies, backend APIs, and open payment protocols.  
<div align="center">
  <img src="https://github.com/DennysJ/KaizenCode/blob/main/Img-Kaizen/Icono.jpg" alt="Prototipo" width="200">
</div>

---

##  ¿Cuál es la problemática?
Los usuarios requieren una forma más rápida e intuitiva de realizar transferencias, sin depender de menús complejos ni formularios extensos. En la actualidad, muchas aplicaciones financieras móviles presentan barreras de accesibilidad, lo que dificulta su uso por parte de personas con discapacidad visual o motriz, así como de usuarios que prefieren interactuar mediante comandos de voz. Esta limitación genera exclusión digital y restringe la autonomía de estos sectores. Por ello, resulta esencial diseñar una aplicación que priorice la inclusión social, garantizando que cualquier persona, independientemente de sus capacidades, pueda realizar operaciones financieras de manera segura, accesible y sencilla.  

##  What is the problem?
Users require a faster and more intuitive way to make transfers, without relying on complex menus or lengthy forms. Currently, many mobile financial applications present accessibility barriers, making them difficult to use for individuals with visual or motor disabilities, as well as for users who prefer to interact through voice commands. This limitation generates digital exclusion and restricts the autonomy of these groups. Therefore, it is essential to design an application that prioritizes social inclusion, ensuring that anyone, regardless of their abilities, can carry out financial operations in a secure, accessible, and simple manner.

---
## ¿Qué tecnología se usó?
● Frontend: Web/Móvil. 

● Reconocimiento de voz: API Web Speech del navegador (SpeechRecognition). 

● Backend: Node.js con Express. 

● Pagos: Interledger Open Payments API. 

● Comunicación: REST API (/api/transfer). 

## What technology was used?
● Frontend: Web/Mobile.  

● Speech Recognition: Browser Web Speech API (SpeechRecognition).  

● Backend: Node.js with Express.  

● Payments: Interledger Open Payments API.  

● Communication: REST API (/api/transfer).  

---

## ¿Cuál es la solución?
A mediano y largo plazo, KaizenApp busca evolucionar hacia una plataforma integral de servicios financieros inclusivos. Además de transferencias por voz, se proyecta la incorporación de tecnologías avanzadas como asistentes virtuales inteligentes y autenticación biométrica, que permitan a los usuarios con discapacidad visual o motriz interactuar de manera más natural y segura. Asimismo, la aplicación podría integrar soporte multilingüe, ampliando su alcance y adaptabilidad.

En el plano social, KaizenApp aspira a convertirse en un referente de banca inclusiva, promoviendo la autonomía financiera de sectores históricamente excluidos del ecosistema digital. A futuro, se contempla la posibilidad de expandir la plataforma hacia pagos internacionales accesibles, gestión de finanzas personales por voz y la integración con servicios gubernamentales y programas sociales, consolidando así un ecosistema financiero verdaderamente accesible, seguro y universal.


## What is the solution?
In the medium and long term, KaizenApp aims to evolve into a comprehensive platform for inclusive financial services. Beyond voice-activated transfers, the platform plans to integrate advanced technologies such as intelligent virtual assistants and biometric authentication, enabling users with visual or motor disabilities to interact more naturally and securely. Additionally, the application could offer multilingual support, expanding its reach and adaptability.

From a social perspective, KaizenApp aspires to become a benchmark for inclusive banking, promoting financial autonomy for groups historically excluded from the digital ecosystem. Looking ahead, the platform envisions expanding into accessible international payments, voice-driven personal finance management, and integration with government services and social programs, thus establishing a truly accessible, secure, and universal financial ecosystem.  

---

## ¿Cuáles son los beneficios?
- **Rapidez**: transferencias con un solo comando de voz.  
- **Accesibilidad**: útil para personas con dificultades auditivas o visuales.  
- **Experiencia intuitiva**: flujo natural, sin menús ni pasos innecesarios.  
- **Pruebas seguras**: uso de wallets y transacciones simuladas.  


## What are the benefits?
- **Speed**: transfers with a single voice command.  
- **Accessibility**: useful for people with hearing or visual impairments.  
- **Intuitive experience**: natural flow, no unnecessary menus or steps.  
- **Safe testing**: use of wallets and simulated transactions.  

---

## Arquitectura / Stack simple
1. **Voz → Texto**: API de reconocimiento de voz.  
2. **Texto → Análisis**: parser de comandos (monto, moneda, destinatario).  
3. **Texto → API**: solicitud al backend (`/api/transfer`).  
4. **Backend Node.js**: integración con Interledger Open Payments.  
5. **Respuesta → Pantalla**: resultado en la app (toast + cuadro de texto).  


## Architecture / Simple Stack
1. **Voice → Text**: speech recognition API.  
2. **Text → Analysis**: command parser (amount, currency, recipient).  
3. **Text → API**: request sent to backend (`/api/transfer`).  
4. **Backend Node.js**: integration with Interledger Open Payments.  
5. **Response → Screen**: result in the app (toast + text box).  

---

## Funciones indispensables
-  **Botón de micrófono** para iniciar reconocimiento de voz.  
-  **Conversión de voz a texto** en tiempo real.  
-  **Detección de comandos** (ej. transferencias).  
-  **API REST** para enviar solicitud al backend.  
-  **Simulación de transferencias** con Interledger.  
-  **Feedback visual y auditivo** (procesando, éxito, error).  

## Essential Features
- **Microphone button** to start speech recognition.  
- **Real-time speech-to-text** conversion.  
- **Command detection** (e.g., transfers).  
- **REST API** to send requests to the backend.  
- **Transfer simulation** with Interledger.  
- **Visual and audio feedback** (processing, success, error).  
<div align="center">
  <img src="https://github.com/DennysJ/Prueba1/blob/main/Protottipo.jpg" alt="Prototype" width="200">
</div>

---

##  Responsables
●**Líder de Proyecto** → Denise Jacobo García 

○ Coordina al equipo. 

○ Supervisa avances. 

○ Asegura que la propuesta se alinee con los objetivos del hackatón. 

● **Programadora Frontend** → Alexandra Lizeth Ruiz Martínez 

○ Desarrollo de interfaz (HTML, CSS, JS). 

○ Integración del frontend con el backend. 

○ Manejo del módulo de speech-to-text y visualización de resultados. 

● **Programador Backend** → Julio Andrés Reyes García 

○ Desarrollo de la API en Node.js. 

○ Conexión con la API de Interledger Open Payments. 

○ Implementación de la lógica para simular transferencias entre wallets. 

● **Documentación & Speech** → Axell Jonathan Méndez Pérez 

○ Redacción del README y manual de usuario. 

○ Preparación del discurso/pitch para presentación. 

○ Explicación clara del problema, la solución y los beneficios.

## Team Members
● **Project Leader** → Denise Jacobo García  

○ Coordinates the team.  
○ Oversees progress.  
○ Ensures the proposal aligns with hackathon objectives.  

● **Frontend Developer** → Alexandra Lizeth Ruiz Martínez  

○ Interface development (HTML, CSS, JS).  
○ Frontend-backend integration.  
○ Handling of speech-to-text module and result display.  

● **Backend Developer** → Julio Andrés Reyes García  

○ API development in Node.js.  
○ Connection with Interledger Open Payments API.  
○ Implementation of logic to simulate wallet transfers.  

● **Documentation & Speech** → Axell Jonathan Méndez Pérez  

○ Writing the README and user manual.  
○ Preparing the pitch/presentation.  
○ Clear explanation of the problem, solution, and benefits.  

---

##  Flujo resumido
1. Usuario presiona el micrófono.  
2. La app convierte voz → texto.  
3. Se analiza el texto y se detecta el comando.  
4. Se envía la solicitud al backend (`/api/transfer`).  
5. Backend procesa y responde con estado de la transacción.  
6. La app muestra el resultado al usuario.


## Simplified Flow
1. User presses the microphone.  
2. The app converts voice → text.  
3. The text is analyzed and the command is detected.  
4. The request is sent to the backend (`/api/transfer`).  
5. Backend processes and responds with transaction status.  
6. The app displays the result to the user.  

<div align="center">
  <img src="https://github.com/DennysJ/KaizenCode/blob/main/Img-Kaizen/view.jpg" width="500">
</div>
