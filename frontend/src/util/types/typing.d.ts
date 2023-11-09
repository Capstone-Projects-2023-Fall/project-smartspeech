/**
 * Represents a stroke on the canvas
 */
type Draw = {
  ctx: CanvasRenderingContext2D
  currentPoint: Point
  prevPoint: Point | null
}

type Point = { x: number; y: number }

export type Points = Point[]