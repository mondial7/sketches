import frank from "./directors/Frank";
import johnny from "./directors/Johnny";

document.getElementById("director-Frank")?.addEventListener("click", () => {
  johnny.closeStudio();
  frank.presentsNextProject();
});
document.getElementById("director-Johnny")?.addEventListener("click", () => {
  frank.closeStudio();
  johnny.presentsNextProject();
});
