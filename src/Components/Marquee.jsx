import { motion } from "framer-motion"


const Marquee = ({imagesUrl}) => {



  return (
    <div className="flex w-full  overflow-hidden">
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,  ease:"linear" , duration:10}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
      {imagesUrl.map((url , index)=>(
        <img src={url} key={index} alt="" />
      ))}
      </motion.div>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:"linear" , duration:10}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
      {imagesUrl.map((url , index)=>(
        <img src={url} key={index} alt="" />
      ))}
      </motion.div>
    </div>
  )
}

// Marquee.propTypes = {
//   imagesUrl: PropTypes.shape({
//     imagesUrl.map: PropTypes.string.isRequired,
//   }).isRequired
// }
export default Marquee  
