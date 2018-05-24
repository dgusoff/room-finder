import * as BABYLON from 'babylonjs';
export default class Renderer {
    private _canvas;
    private _engine;
    private _scene;
    createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine): void;
    initialize(canvas: HTMLCanvasElement): void;
}
