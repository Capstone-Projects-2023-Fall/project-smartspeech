import Tile from '@/components/AAC/Tile'
import data from '@/data/AAC/Tiles'
import { getAACAssets } from '@/util/AAC/getAACAssets'
import { useEffect, useRef, useState } from 'react'

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
  const [mouseDown, setMouseDown] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prevPoint = useRef<null | Point>(null)

  const onMouseDown = () => setMouseDown(true)

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  
  const promptUserRecogination = () => {
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    if(canvas){
      const drawingDataUrl = canvas.toDataURL() // Capture the drawing as a data URL
      console.log("Captured drawing data URL:", drawingDataUrl)

      //mock function accepting the canvas drawling
      mockRecognitionFunc(drawingDataUrl)

    }
    
    
  }
  
  function mockRecognitionFunc(drawingDataUrl: string){
    console.log("Accepted drawing", drawingDataUrl)
    
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!mouseDown) return
      const currentPoint = computePointInCanvas(e)

      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx || !currentPoint) return

      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current })
      prevPoint.current = currentPoint
    }

    const computePointInCanvas = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      return { x, y }
    }

    const mouseUpHandler = () => {
      setMouseDown(false)
      prevPoint.current = null
    }

    // Add event listeners
    canvasRef.current?.addEventListener('mousemove', handler)
    window.addEventListener('mouseup', mouseUpHandler)

    // Remove event listeners
    return () => {
      canvasRef.current?.removeEventListener('mousemove', handler)
      window.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [onDraw])

  return { canvasRef, onMouseDown, clear, promptUserRecogination}
}