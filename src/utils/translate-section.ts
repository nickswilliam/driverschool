export const translateSection = (section: "appoint" | "consult" | "contact") => {
  let seccion: string;
  switch (section) {
    case "appoint":
      seccion = "Reservas"
      break;
    case "consult":
        seccion = "Consultas"
        break;
    case "contact":
        seccion = "Contacto"
        break;
  }

  return seccion
};
