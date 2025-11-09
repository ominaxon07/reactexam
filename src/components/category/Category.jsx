
import "./Category.css"
import { HiOutlineDevicePhoneMobile, HiOutlineComputerDesktop } from "react-icons/hi2"
import { BsSmartwatch } from "react-icons/bs"
import { MdOutlineCameraAlt } from "react-icons/md"
import { LuHeadphones } from "react-icons/lu"
import { TbDeviceGamepad } from "react-icons/tb"

function Category() {
  return (
    <div className="category-container">

      <div className="category-header">
        <span className="red-line"></span>
        <p className="category-title">Categories</p>
      </div>

      <h2 className="browse">Browse By Category</h2>

      <div className="category-boxes">

        <div className="category-box">
          <HiOutlineDevicePhoneMobile className="category-icon" />
          <p>Phones</p>
        </div>

        <div className="category-box">
          <HiOutlineComputerDesktop className="category-icon" />
          <p>Computers</p>
        </div>

        <div className="category-box">
          <BsSmartwatch className="category-icon" />
          <p>SmartWatch</p>
        </div>

        <div className="category-box">
          <MdOutlineCameraAlt className="category-icon" />
          <p>Camera</p>
        </div>

        <div className="category-box">
          <LuHeadphones className="category-icon" />
          <p>Headphones</p>
        </div>

        <div className="category-box">
          <TbDeviceGamepad className="category-icon" />
          <p>Gaming</p>
        </div>

      </div>

      <hr className="divider" />
    </div>
  )
}

export default Category
