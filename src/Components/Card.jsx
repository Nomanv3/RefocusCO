
import { IoIosArrowRoundForward } from "react-icons/io";
import classNames from 'classnames';
import { motion } from "framer-motion";




const Card = ({width , start , para , hover="false" }) => {

    
console.log(hover)

  return (
    <motion.div   whileHover={{ background: hover === true && "#7443ff" , padding :"25px" }} 
    className={classNames(` p-5 rounded-xl bg-zinc-800 ${width} text-white min-h-[30rem]  flex flex-col justify-between`)}>
        <div className='w-full'>

        <div className='w-full flex justify-between items-center' >
            <h1>one heading</h1>
        <IoIosArrowRoundForward/>
        </div>
        <h1 className='text-3xl font-medium mt-5'>First heading</h1>
        </div>
        <div className='down w-full '>
            {start && (
                <>
                <h1 className='text-5xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                <button className='rounded-full py-2 text-center px-5 mt-5 border-2 border-zinc-50'>Contact Us</button>
                </>
            )  }

            {para && (
                <p className='text-sm text-zinc-500 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

            )}
        </div>

    </motion.div>
  )
}

export default Card
