import { FaLayerGroup } from "react-icons/fa6";
import { MdOutlineContentPaste } from "react-icons/md";
import { PiChatsCircleThin } from "react-icons/pi";
import { GrAttachment } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

const UseSingleCard = () => {
  return (
    <div className="w-[400px] h-auto bg-[#FFFFFF] border p-4 rounded-md my-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
              alt=""
            />
          </div>
          <h3 className="font-bold">Client Name</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
              alt=""
            />
          </div>
          <h3 className="font-bold">Sadik Istiak</h3>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <p className="flex gap-2 items-center w-4/5">
          <span>
            <FaLayerGroup size={20} />
          </span>
          Lorem ipsum dolor sit consectetur...
        </p>
        <div className="bg-[#F3F4F8] text-[#676464] font-medium px-1 rounded-md flex items-center justify-between gap-x-1 h-7 border border-[#67646421]">
          <MdOutlineContentPaste size={16} />
          <span>1/2</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-8 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
              alt=""
            />
          </div>
          <div className="w-8 h-8 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
              alt=""
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#F3F4F8] text-[#676464] border border-[#67646421] flex justify-center items-center font-semibold">
            12+
          </div>
        </div>
        <div className="flex items-center gap-3 font-semibold">
          <span className="flex gap-1 items-center">
            <PiChatsCircleThin size={22}/> 15
          </span>
          <button className="flex gap-1 items-center">
            <GrAttachment size={18}/> 25
          </button>
          <span className="flex gap-1 items-center">
            <SlCalender size={18}/>
            10-10-2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default UseSingleCard;
