export const formatDate = (date: string) => {
  const fecha = new Date(date);

  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const day = String(fecha.getDate()).padStart(2, "0");
  const month = months[fecha.getMonth()];
  const year = fecha.getFullYear();

  const hours = String(fecha.getHours()).padStart(2, "0");
  const minutes = String(fecha.getMinutes()).padStart(2, "0");

  const fechaFormateada = `${day}-${month}-${year} ${hours}:${minutes}`;
  return fechaFormateada;
};
