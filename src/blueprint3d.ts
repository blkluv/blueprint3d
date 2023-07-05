module BP3D {
  /** Startup options. */
  export interface Options {
    widget?: boolean;
    threeElement?: string;
    threeCanvasElement?: string;
    floorplannerElement?: string;
    textureDir?: string;
  }

  /** Blueprint3D core application. */
  export class Blueprint3d {
    private model: Model.Model;
    private three: Three.Main;
    private floorplanner: Floorplanner.Floorplanner;

    constructor(options: Options) {
      this.model = new Model.Model(options.textureDir);
      this.three = new Three.Main(this.model, options.threeElement, options.threeCanvasElement, {});

      if (!options.widget) {
        this.floorplanner = new Floorplanner.Floorplanner(options.floorplannerElement, this.model.floorplan);
      } else {
        this.three.getController().enabled = false;
      }
    }
  }

  // Placeholder implementations for Model, Three, and Floorplanner modules
  export module Model {
    export class Model {
      constructor(textureDir?: string) {
        // Model constructor implementation
      }

      // Other methods and properties
    }
  }

  export module Three {
    export class Main {
      constructor(model: Model.Model, threeElement?: string, threeCanvasElement?: string, options: any) {
        // Three.Main constructor implementation
      }

      getController() {
        // Placeholder implementation for getController method
      }

      // Other methods and properties
    }
  }

  export module Floorplanner {
    export class Floorplanner {
      constructor(floorplannerElement?: string, floorplan: any) {
        // Floorplanner.Floorplanner constructor implementation
      }

      // Other methods and properties
    }
  }
}
