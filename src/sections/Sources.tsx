export default function Sources() {
  return (
    <div className="p-10 flex flex-col">
      <div className="text-3xl">Credits</div>
      <div>
        This website was created by Enoch Zhu for the{" "}
        <i>ARC308 Scavenger Hunt</i>;{" "}
        <a
          href="https://github.com/Wavefire5201/birdnest"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-green-800"
        >
          GitHub
        </a>
      </div>
      <div>
        3D Model from:{" "}
        <a
          href="https://rigmodels.com/model.php?view=Beijing_National_Stadium-3d-model__f5a77e6a2bd74901964494061bc02720"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-green-800"
        >
          RigModels
        </a>
      </div>
      <div>
        Skybox image from:{" "}
        <a
          href="https://polyhaven.com/a/shanghai_riverside"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-green-800"
        >
          PolyHaven
        </a>
      </div>
      <div>
        Carousel images from:{" "}
        <a
          href="https://en.wikiarquitectura.com/building/beijing-olympic-stadium/#"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-green-800"
        >
          WikiArquitectura
        </a>
      </div>
    </div>
  );
}
