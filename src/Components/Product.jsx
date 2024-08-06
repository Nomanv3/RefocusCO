import Button from "./Button"
import PropTypes from 'prop-types'


const Product = ({val , mover , count}) => {

  

  return (
    <div className="w-full py-20 text-white">
       <div onMouseEnter={()=>{mover(count - 0)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
        <p className="mb-20">{val.description}</p>
        <div className="flex items-center gap-5">
            
        {val.live && <Button />}
        {val.case && <Button  title="Case Study"/>}

        {/* <Button/> */}
        </div>

        </div>
       </div>
</div>
  );
};


Product.propTypes = {
    val: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.number.isRequired,
      live:Boolean,
      case:Boolean
    }).isRequired
  }

export default Product;
