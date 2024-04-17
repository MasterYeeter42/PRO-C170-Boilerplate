AFRAME.registerComponent("create-markers", {
  
  //Add Code Here!
  init: async function() {

    var mainScene = document.querySelector("#main-scene");

    var dishes = await this.getDishes();

    dishes.map(dish => {
      var marker = document.createElement("a-marker");
      marker.setAttribute("id", dish.id);
      marker.setAttribute("type", "pattern");
      marker.setAttribute("url", dish.marker_pattern_url);
      marker.setAttribute("cursor", {
        rayOrigin: "mouse"
      });

      marker.setAttribute("markerhandler", {});
      mainScene.appendChild(marker);

      var model = document.createElement("a-entity");

      model.sertAttribute("id", `model-${dish.id`);
      model.sertAttribute("position", dish.model_geometry.position);
      model.sertAttribute("rotation", dish.model_geometry.position);
      model.sertAttribute("scale", dish.model_geometry.scale);
      model.sertAttribute("gesture-handler", );
    });
  };
});
