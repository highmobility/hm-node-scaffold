import HMKit from 'hmkit';

/*
 * Before using HMKit, you'll have to initialise it
 * with a snippet from the Platform Workspace:
 *
 *   1. Sign in to the workspace
 *   2. Go to the LEARN section and choose Node.js
 *   3. Follow the Getting Started instructions
 *
 * By the end of the tutorial you will have a snippet for initialisation,
 * that looks something like this:
 *
 *   const hmkit = new HMKit(
 *     "dGVzdHPXjh7VTyjZt8XoNrK/hJDUSSj1i4VzQpIcUds08P9QzqpbWUKl46VVa0LC5AZJTxDr6FSVlOFiD8EKCSQVG1QXJe7umDAnRFzgYnUKHm5jA9LwayteCRB49ZyUPgpAOXJMsSAqXbouX9rDU6dQ+UCjn7oL6+ZDBbDA+X71LFhuR9XNuV8VBiV5T3gID8TFfME67Vp3",
 *     "uGGjPucN7SnP3BxV3a4VH6q0yy+oLbf3UM5+GtLLSSc="
 *   );
 */

// PASTE CLIENT CERTIFICATE SNIPPET HERE

async function app() {
  const accessCertificate = await hmkit.downloadAccessCertificate(
    "PASTE ACCESS TOKEN HERE"
  );

  try {
    const response = await hmkit.telematics.sendCommand(
      accessCertificate.getVehicleSerial(),
      hmkit.commands.EngineCommand.turnOn()
    );

    console.log(response.bytes());
    console.log(response.parse());
  } catch (e) {
    console.log(e);
  }
}

// Run your app
app();
