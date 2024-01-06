const dev = process.env.NEXT_PUBLIC_NODE_ENV !== "production";

export const forEmailMontage = "partner@fe-energiesysteme.de";

export const forEmailKontakt = "info@fe-energiesysteme.de";
// use this for bewerbung sending
export const forEmailBewerbung = "j.rabzewitsch@fe-energiesysteme.de";

export const server = dev
  ? "http://localhost:3000"
  : "https://fe-energiesysteme.de";
