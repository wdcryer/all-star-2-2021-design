let shirt;

const setParams = (key, value) => {
  const params = new URLSearchParams(window.location.search);

  params.set(key, value);
  history.pushState({}, "", window.location.pathname + "?" + params.toString());
};

const setDesign = image => {
  const src = `images/designs/${image}`;
  const design = document.getElementById("design");

  design.src = src;
  design.dataset.design = image;

  setParams("design", image);
};

const handleDesignChange = event => {
  setDesign(event.target.value);
};

const setShirt = image => {
  const src = `images/shirts/${image}`;
  const imageContainer = document.getElementById("image-container");

  document.getElementById("shirt").src = src;

  if (image.startsWith("Womens")) {
    imageContainer.classList.add("womens-shirt");
  } else {
    imageContainer.classList.remove("womens-shirt");
  }

  setParams("shirt", image);
};

const handleShirtChange = event => {
  setShirt(event.target.value);
};

const setPosition = position => {
  document.getElementById("design").dataset.position = position;

  setParams("position", position);
};

const handlePositionChange = event => {
  setPosition(event.target.value);
};

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const designOptions = document.getElementById("design-options");
  designOptions.addEventListener("change", handleDesignChange);

  if (params.has("design")) {
    const design = params.get("design");

    designOptions.value = design;
    setDesign(design);
  } else {
    setDesign(designOptions.value);
  }

  const shirtOptions = document.getElementById("shirt-options");
  shirtOptions.addEventListener("change", handleShirtChange);

  if (params.has("shirt")) {
    const shirt = params.get("shirt");

    shirtOptions.value = shirt;
    setShirt(shirt);
  } else {
    setShirt(shirtOptions.value);
  }

  const positionOptions = document.getElementById("position-options");
  positionOptions.addEventListener("change", handlePositionChange);

  if (params.has("position")) {
    const position = params.get("position");

    positionOptions.value = position;
    setPosition(position);
  } else {
    setPosition(positionOptions.value);
  }
});
