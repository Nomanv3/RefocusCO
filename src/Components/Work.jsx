import { useScroll } from "framer-motion"
import { useState } from "react"

const Work = () => {


  const [images,setimages]=useState( [
    {url : 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png' , top:'50%' , left:'50%' , isActive:false},
    {
      url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top:'53%' , left:'44%' , isActive:false,
    },
    {
      url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top:'45%' ,left:'56%' , isActive:false
    },
    {
      url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png' , top:'60%' , left:'53%', isActive:false
    },
    {
      url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png' , top:'43%' , left:'40%' , isActive:false
    },
    {
      url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png' , top:'65%' , left:'55%' , isActive:false
    }
  ])


  // its give you scroll value and we are saying that we just want scrolly axis it is giving us
  // one more like scrolly is scrollYprogress its gives on top  0 and in end it give us 1 so this how it works here and we muitlpy it with hundred it will give us ext precntage of th page like much pertange we scrollet till know
  const {scrollYProgress} = useScroll()


  scrollYProgress.on('change',(data)=>{
   
    function showimage(arr){
      setimages(prev=>(
        prev.map((item,index)=>(
          arr.indexOf(index) === -1 ? (
            {...item , isActive:false}
          ): {...item , isActive:true}
        ))
      ))
    }
   
   
    switch(Math.floor(data * 100)){
      case 0:
       showimage([]);
        break;
        case 1:
          showimage([0])
          break;
          case 2:
          console.log([0,1])
          break;
          case 3:
          showimage([0,1,2])
          break;
          case 4:
            showimage([0,1,2,3])
            break;
            case 6:
              showimage([0,1,2,3,4])
              break;
              case 8:
                showimage([0,1,2,3,4,5])
                break;
      

    }
  })



 
  return (
    <div>
      <div className="w-full">
       <div className="relative  max-w-screen-xl text-white mx-auto text-center">
        <h1 className="text-[45vw] leading-none font-medium tracking-tighter font-[Arial] select-none" >work</h1>
       <div className=" absolute top-0 w-full h-full">
        {images.map((elem , index)=>(elem.isActive && <img  key={index}  src={elem.url}  className="w-[19rem]  absolute rounded-lg -translate-x-[50%] -translate-y-[50%]" 
          style={{top : elem.top , left: elem.left}}
          alt="" /> ))}
       </div>
       </div>
      </div>
    </div>
  )
}



export default Work
