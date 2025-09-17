# KaizenApp  

Aplicación experimental que convierte comandos de voz en **transacciones financieras**, usando tecnologías de reconocimiento de voz, APIs de backend y protocolos abiertos de pagos.  
<div align="center">
  <img src="https://github.com/DennysJ/KaizenCode/blob/main/Img-Kaizen/Icono.jpg" alt="Prototipo" width="200">
</div>
---

##  ¿Cuál es la problemática?
Los usuarios necesitan una forma más **rápida e intuitiva** de realizar transferencias, sin depender de menús complicados o formularios extensos. Actualmente, los sistemas financieros móviles suelen ser poco accesibles para personas que prefieren la interacción por voz o tienen problemas audiovisuales.  

---

## ¿Qué tecnología se usó?
● Frontend: Web/Móvil. 

● Reconocimiento de voz: API Web Speech del navegador (SpeechRecognition). 

● Backend: Node.js con Express. 

● Pagos: Interledger Open Payments API. 

● Comunicación: REST API (/api/transfer). 

---

## ¿Cuál es la solución?
KaizenApp permite que el usuario **hable un comando**, el sistema lo procese en texto, lo analice y lo envíe a un backend que realiza una transferencia con la API de Interledger. Finalmente, el resultado (éxito o error) se muestra en pantalla.  

---

## ¿Cuáles son los beneficios?
- **Rapidez**: transferencias con un solo comando de voz.  
- **Accesibilidad**: útil para personas con dificultades auditivas o visuales.  
- **Experiencia intuitiva**: flujo natural, sin menús ni pasos innecesarios.  
- **Pruebas seguras**: uso de wallets y transacciones simuladas.  

---

## Arquitectura / Stack simple
1. **Voz → Texto**: API de reconocimiento de voz.  
2. **Texto → Análisis**: parser de comandos (monto, moneda, destinatario).  
3. **Texto → API**: solicitud al backend (`/api/transfer`).  
4. **Backend Node.js**: integración con Interledger Open Payments.  
5. **Respuesta → Pantalla**: resultado en la app (toast + cuadro de texto).  

---

## Funciones indispensables
-  **Botón de micrófono** para iniciar reconocimiento de voz.  
-  **Conversión de voz a texto** en tiempo real.  
-  **Detección de comandos** (ej. transferencias).  
-  **API REST** para enviar solicitud al backend.  
-  **Simulación de transferencias** con Interledger.  
-  **Feedback visual y auditivo** (procesando, éxito, error).  
<div align="center">
  <img src="https://github.com/DennysJ/Prueba1/blob/main/Protottipo.jpg" alt="Prototipo" width="200">
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

---

##  Flujo resumido
1. Usuario presiona el micrófono.  
2. La app convierte voz → texto.  
3. Se analiza el texto y se detecta el comando.  
4. Se envía la solicitud al backend (`/api/transfer`).  
5. Backend procesa y responde con estado de la transacción.  
6. La app muestra el resultado al usuario.  
