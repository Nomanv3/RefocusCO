// import React from 'react'
import PropTypes from 'prop-types'

const Stripe = ({val}) => {

    
  return (
    <div className="w-[16.66%] flex  items-center justify-between px-4 border-zinc-800 py-5 border-b-[0.5px] border-t-[0.5px] border-r-[0.5px] ">
    <img src={val.url} alt="" className="w-36 " />  
    <span className="text-white font-semibold">{val.number}</span>
    </div>
  )
}

Stripe.propTypes = {
    val: PropTypes.shape({
      url: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired
    }).isRequired
  }
export default Stripe
