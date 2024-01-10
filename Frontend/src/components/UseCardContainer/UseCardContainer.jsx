import { string } from "prop-types";
import UseSingleCard from "../Reusable/UseSingleCard/UseSingleCard";

const UseCardContainer = ({ bgColor, title }) => {
  return (
    <div className="flex-shrink-0 flex flex-col gap-2 overflow-x-auto bg-[#F3F4F8] p-2 rounded-sm text-[#676464]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          {bgColor && (
            <div
              className={`rounded-l-full p-4`}
              style={{ backgroundColor: `${bgColor}` }}
            ></div>
          )}
          <span className="font-semibold ">{title}</span>
        </div>
        <span className="bg-[#E9EEF4] border rounded-md px-3 py-1 ">0</span>
      </div>
      <div className="h-screen overflow-y-auto">
        {[1, 2, 3, 4, 5, 6].map((cardItem, cardIdx) => (
          <UseSingleCard key={cardIdx} />
        ))}
      </div>
    </div>
  );
};

UseCardContainer.propTypes = {
  bgColor: string,
  title: string,
};

export default UseCardContainer;
