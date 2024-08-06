import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const [pos, setpos] = useState(0);

  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
    {
      title: "Yahooo!",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
    // {
    //   title: "Yahooo!",
    //   description:
    //     "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    //   live: true,
    //   case: true,
    // },
  ];

  const mover = (val) => {
    setpos(val * 23);
  };

  return (
    <div className="bg-zinc-900 mt-32 relative">
      {products.map((elems, index) => (
        <Product count={index} val={elems} mover={mover} />
      ))}
      <div className=" absolute w-full h-full top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
          className="absolute h-[23rem] w-[32rem] bg-white left-[42%] -translate-x-[50%] rounded-lg overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}

            className=" h-full w-full bg-sky-300 overflow-hidden rounded-lg"
          >
    <img src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXN8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}

            className=" h-full w-full bg-sky-400"
          >
            <img src="https://images.unsplash.com/photo-1633185079166-510a332eb8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGVzfGVufDB8fDB8fHww" className="w-full h-full object-cover" alt="" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}

            className=" h-full w-full bg-sky-500"
          >
            <img src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXN8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}

            className=" h-full w-full bg-sky-900"
          >
            <img src="https://images.unsplash.com/photo-1634634465913-5bb5600942f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGVzfGVufDB8fDB8fHww" className="w-full h-full object-cover"  alt="" />
          </motion.div>
        </motion.div>
      </div>
  
    </div>
  );
};

export default Products;
