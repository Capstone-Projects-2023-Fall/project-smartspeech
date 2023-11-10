/**
 * Represents a stroke on the canvas
 */
export type Draw = {
  ctx: CanvasRenderingContext2D
  currentPoint: Point
  prevPoint: Point | null
}

export type Point = { x: number; y: number }

export type Points = Point[]