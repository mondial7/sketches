import frank from "./studio/Frank";
import johnny from "./studio/Johnny";

document.getElementById("director-Frank")?.addEventListener("click", () => {
  johnny.closeStudio();
  frank.presentsNextProject();
});
document.getElementById("director-Johnny")?.addEventListener("click", () => {
  frank.closeStudio();
  johnny.presentsNextProject();
});
