'use-client'
import Tiles from "@/components/AAC/Tiles";
import { FC, useState } from 'react'
import { useDraw } from '../util/hooks/useDraw'
import { ChromePicker } from 'react-color'

interface pageProps {}

// const page: FC<pageProps> = ({}) => {
//   const { canvasRef, onMouseDown, clear } = useDraw(drawLine)

//   function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
//     const { x: currX, y: currY } = currentPoint
//     const lineWidth = 5

//     let startPoint = prevPoint ?? currentPoint
//     ctx.beginPath()
//     ctx.lineWidth = lineWidth
//     ctx.moveTo(startPoint.x, startPoint.y)
//     ctx.lineTo(currX, currY)
//     ctx.stroke()

//     ctx.beginPath()
//     ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
//     ctx.fill()

//     return (
//         <section className="font-inter">
//             <div className='w-screen h-screen bg-white flex justify-center items-center'>
//                 <button type='button' className='p-2 rounded-md border border-black' onClick={clear}>
//                     Clear canvas
//                 </button>
//             </div>
//             <canvas
//                 ref={canvasRef}
//                 onMouseDown={onMouseDown}
//                 width={750}
//                 height={750}
//                 className='border border-black rounded-md'
//             />
//             {/* <Tiles /> */}
//         </section>
//     );
//   }
// }


// export default page

const page: FC<pageProps> = ({}) => {
    const [color, setColor] = useState<string>('#000')
    const { canvasRef, onMouseDown, clear } = useDraw(drawLine)
  
    function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
      const { x: currX, y: currY } = currentPoint
      const lineColor = color
      const lineWidth = 5
  
      let startPoint = prevPoint ?? currentPoint
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = lineColor
      ctx.moveTo(startPoint.x, startPoint.y)
      ctx.lineTo(currX, currY)
      ctx.stroke()
  
      ctx.fillStyle = lineColor
      ctx.beginPath()
      ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
      ctx.fill()
    }
  
    return (
      <div className='w-screen h-screen bg-white flex justify-center items-center'>
        <div className='flex flex-col gap-10 pr-10'>

          <button type='button' className='p-2 rounded-md border border-black' onClick={clear}>
            Clear canvas
          </button>
        </div>
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          width={750}
          height={750}
          className='border border-black rounded-md'
        />
      </div>
    )
  }
  
  export default page