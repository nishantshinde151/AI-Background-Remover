import { assets } from "../assets/assets"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <img src= {assets.logo} alt="" />
        <button>
            Get started <img src={assets.arrow_icon} />
        </button>
    </div>
  )
}

export default Navbar