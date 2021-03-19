const setParams = (key, value) => {
  const params = new URLSearchParams(window.location.search);

  params.set(key, value);
  history.pushState({}, "", window.location.pathname + "?" + params.toString());
};

const setDesign = (image) => {
  const src = `images/designs/${image}`;
  const design = document.getElementById("design");

  design.src = src;

  setParams("design", image);
};

const handleDesignChange = (event) => {
  setDesign(event.target.value);
};

const setShirt = (image) => {
  const src = `images/shirts/${image}`;

  document.getElementById("shirt").src = src;

  setParams("shirt", image);
};

const handleShirtChange = (event) => {
  setShirt(event.target.value);
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
});
