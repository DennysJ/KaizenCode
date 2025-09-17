# KaizenApp  

Aplicación experimental que convierte **comandos de voz en transacciones financieras simuladas**, usando tecnologías de reconocimiento de voz, APIs de backend y protocolos abiertos de pagos.  
<div align="center">
  <img src="https://github.com/DennysJ/KaizenCode/blob/main/prototipo.jpg" alt="Prototipo" width="200">
</div>


##  ¿Cuál es el problema?
Los usuarios necesitan una forma más **rápida e intuitiva** de realizar transferencias, sin depender de menús complicados o formularios extensos. Actualmente, los sistemas financieros móviles suelen ser poco accesibles para personas que prefieren la interacción por voz.  


## ¿Qué tecnología usarán?
- **Frontend**: Aplicación móvil/web con botón de micrófono.  
- **Reconocimiento de voz**: API nativa o de terceros (ej. Web Speech API, Google Speech-to-Text).  
- **Backend**: Node.js con Express.  
- **Pagos simulados**: Interledger Open Payments API.  
- **Comunicación**: API REST (`/api/transfer`).  


## ¿Cuál es la solución?
KaizenApp permite que el usuario **hable un comando**, el sistema lo procese en texto, lo analice y lo envíe a un backend que simula una transferencia con la API de Interledger. Finalmente, el resultado (éxito o error) se muestra en pantalla.  


## ¿Cuáles son los beneficios?
- **Rapidez**: transferencias con un solo comando de voz.  
- **Accesibilidad**: útil para personas con dificultades motoras o visuales.  
- **Experiencia intuitiva**: flujo natural, sin menús ni pasos innecesarios.  
- **Pruebas seguras**: uso de wallets y transacciones simuladas.  


## Arquitectura / Stack simple
1. **Voz → Texto**: API de reconocimiento de voz.  
2. **Texto → Análisis**: parser de comandos (monto, moneda, destinatario).  
3. **Texto → API**: solicitud al backend (`/api/transfer`).  
4. **Backend Node.js**: integración con Interledger Open Payments.  
5. **Respuesta → Pantalla**: resultado en la app (toast + cuadro de texto).  


## Funciones indispensables
-  **Botón de micrófono** para iniciar reconocimiento de voz.  
-  **Conversión de voz a texto** en tiempo real.  
-  **Detección de comandos** (ej. transferencias).  
-  **API REST** para enviar solicitud al backend.  
-  **Simulación de transferencias** con Interledger.  
-  **Feedback visual y auditivo** (procesando, éxito, error).  


## Responsables
- **Frontend (App/Interfaz)** → Equipo de desarrollo móvil/web.  
- **Módulo de Voz a Texto** → Integrador de APIs de reconocimiento de voz.  
- **Parser de Comandos** → Equipo de NLP / lógica de negocio.  
- **Backend (Node.js + API Interledger)** → Equipo backend.  
- **UI/UX y feedback visual** → Equipo de diseño de interfaz.  


## Flujo resumido
1. Usuario presiona el micrófono.  
2. La app convierte voz → texto.  
3. Se analiza el texto y se detecta el comando.  
4. Se envía la solicitud al backend (`/api/transfer`).  
5. Backend procesa y responde con estado de la transacción.  
6. La app muestra el resultado al usuario.  
