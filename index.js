//switch
let day = "lunes";

const getDayWithSwitch = (day) => {
  switch (day) {
    case "lunes":
      console.log("Hoy es lunes");
      break;
    case "martes":
      console.log("Hoy es martes");
      break;
    case "miércoles":
      console.log("Hoy es miércoles");
      break;
    case "jueves":
      console.log("Hoy es jueves");
      break;
    case "viernes":
      console.log("Hoy es viernes");
      break;
    case "sábado":
      console.log("Hoy es sábado");
      break;
    case "domingo":
      console.log("Hoy es domingo");
      break;
    default:
      console.log("No es un día de la semana");
  }
};

//objecs
const getDayWithObject = (day = "default") => {
  const weekDay = {
    lunes: () => {
      console.log("Hoy es lunes");
    },
    martes: () => {
      console.log("Hoy es martes");
    },
    miércoles: () => {
      console.log("Hoy es miércoles");
    },
    jueves: () => {
      console.log("Hoy es jueves");
    },
    viernes: () => {
      console.log("Hoy es viernes");
    },
    sábado: () => {
      console.log("Hoy es sábado");
    },
    domingo: () => {
      console.log("Hoy es domingo");
    },
    default: () => {
      console.log("No es un día de la semana");
    },
  };

  weekDay[day]();
};

//Function executions
getDayWithSwitch(day);
getDayWithObject();
