import express from "express";
import { createAuthenticatedClient, OpenPaymentsClientError } from "@interledger/open-payments";

const app = express();
app.use(express.json());
app.use(express.static('public'));

const PORT = 3000;

const SENDING_WALLET_URL = "https://ilp.interledger-test.dev/platzilizmxn";
const PRIVATE_KEY = "private.key"; 
const KEY_ID = "96cf1572-00ef-4c29-8c37-a3f38e830db7";

const friends = {
  julio: "https://ilp.interledger-test.dev/platziandres",
  denise: "https://ilp.interledger-test.dev/denj",
  axel: "https://ilp.interledger-test.dev/axellmx",
};

app.post("/api/transfer", async (req, res) => {
  try {
    const { amount, friendName } = req.body;

    if (!amount || !friendName) {
      return res.status(400).json({ error: "Faltan parámetros (amount, friendName)" });
    }

    const receivingWalletUrl = friends[friendName.toLowerCase()];
    if (!receivingWalletUrl) {
      return res.status(400).json({ error: `Amigo "${friendName}" no encontrado` });
    }

    const client = await createAuthenticatedClient({
      walletAddressUrl: SENDING_WALLET_URL,
      privateKey: PRIVATE_KEY,
      keyId: KEY_ID,
    });

    const sendingWalletAddress = await client.walletAddress.get({ url: SENDING_WALLET_URL });
    const receivingWalletAddress = await client.walletAddress.get({ url: receivingWalletUrl });

    const scaledAmount = (
      parseFloat(amount) *
      Math.pow(10, receivingWalletAddress.assetScale)
    ).toString();

    // Paso 1: Grant para incoming payment
    const incomingPaymentGrant = await client.grant.request(
      { url: receivingWalletAddress.authServer },
      {
        access_token: {
          access: [{ type: "incoming-payment", actions: ["create", "read"] }],
        },
      }
    );

    // Paso 2: Crear incoming payment
    const incomingPayment = await client.incomingPayment.create(
      {
        url: receivingWalletAddress.resourceServer,
        accessToken: incomingPaymentGrant.access_token.value,
      },
      {
        walletAddress: receivingWalletAddress.id,
        incomingAmount: {
          assetCode: receivingWalletAddress.assetCode,
          assetScale: receivingWalletAddress.assetScale,
          value: scaledAmount,
        },
      }
    );

    // Paso 3: Grant para quote
    const quoteGrant = await client.grant.request(
      { url: sendingWalletAddress.authServer },
      { access_token: { access: [{ type: "quote", actions: ["create", "read"] }] } }
    );

    // Paso 4: Crear quote
    const quote = await client.quote.create(
      {
        url: sendingWalletAddress.resourceServer,
        accessToken: quoteGrant.access_token.value,
      },
      {
        sourceAmount: {
          assetCode: sendingWalletAddress.assetCode,
          assetScale: sendingWalletAddress.assetScale,
          value: scaledAmount,
        },
        destination: {
          type: "incoming-payment",
          id: incomingPayment.id,
        },
      }
    );

    // Paso 5: Grant para interact (autorización)
    const outgoingPaymentGrant = await client.grant.request(
      { url: sendingWalletAddress.authServer },
      {
        access_token: {
          access: [{ type: "outgoing-payment", actions: ["create"] }],
        },
      }
    );

    return res.json({
      redirectUrl: outgoingPaymentGrant.interact.redirect,
      message: `Transferencia de ${amount} pesos a ${friendName} iniciada.`,
    });

  } catch (error) {
    if (error instanceof OpenPaymentsClientError) {
      console.error("OpenPaymentsClientError:", error.message);
      return res.status(400).json({ error: error.message });
    }

    console.error("Error inesperado:", error);
    return res.status(500).json({ error: "Error inesperado en el servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
