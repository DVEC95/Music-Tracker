document.addEventListener("DOMContentLoaded", () => {
  const newReleaseForm = document.querySelector("#new-release");
  newReleaseForm.addEventListener("submit", addNewRelease);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", deleteAll);
});

const addNewRelease = function(event){
  event.preventDefault();

  const newRelease = createRelease(event.target);
  const releaseList = document.querySelector("#music-releases");
  releaseList.appendChild(newRelease);

  event.target.reset();
};

const createRelease = function(form){
  const newRelease = document.createElement("li");
  newRelease.classList.add("new-release");

  const artist = document.createElement("h2");
  artist.textContent = form.artist.value;
  newRelease.appendChild(artist);

  const album = document.createElement("h2");
  album.textContent = form.album.value;
  newRelease.appendChild(album);

  const format = document.createElement("h3");
  format.textContent = form.format.value;
  newRelease.appendChild(format);

  return newRelease;
};

const deleteAll = function(event){
  const releaseList = document.querySelector("#music-releases");
  releaseList.innerHTML = "";
};
