import * as tf from "@tensorflow/tfjs";

type Coordinate = { x: number; y: number };
type BoundingBox = {
    min: Coordinate;
    max: Coordinate;
  };

let model: tf.LayersModel | null = null;
let classNames: string[] = [];

function success(data: string): void {
    const lst = data.split(/\n/);
    for (let i = 0; i < lst.length - 1; i++) {
        let symbol = lst[i];
        classNames[i] = symbol;
    }
    console.log('dictionary loaded and parsed.');
}

async function loadDict(): Promise<void> {
    const loc: string = '/model_assets/class_names.txt';
    
    try {
      const response = await fetch(loc);
      const data = await response.text();
      success(data);
    } catch (error) {
      console.error('Failed to load dictionary:', error);
    }
}

export async function loadModel(): Promise<void> {
    model = await tf.loadLayersModel('/model_assets/model.json');
    console.log('model loaded');
    model.predict(tf.zeros([1, 28, 28, 1])); // Dummy prediction to warm up the model
    await loadDict();
}