import Image from "next/image";

interface UserCardProps {
  type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  // Conditional styling based on the `type` prop
  const getTypeStyles = () => {
    switch (type) {
      case "High":
        return {
          borderColor: "border-[#D4AF37]", 
          badgeColor: "bg-red-500", 
        };
      case "Medium":
        return {
          borderColor: "border-[#D4AF37]", 
          badgeColor: "bg-blue-500",        
        };
      case "Low":
        return {
          borderColor: "border-[#D4AF37]",         
          badgeColor: "bg-green-500",         
        };
      default:
        return {
          borderColor: "border-[#D4AF37]", 
          badgeColor: "border-gray-400", 
        };
    }
  };

  const { borderColor, badgeColor } = getTypeStyles();

  return (
    <div className={`rounded-2xl border-2 ${borderColor} bg-white p-4 flex-1 min-w-[240px] shadow-md`}>
      <div className="flex justify-between items-center">
        <span className={`text-[10px] ${badgeColor} text-white px-2 py-1 rounded-full font-semibold border-2`}>
          {type}
        </span>
        <Image src="/more.png" alt="More options" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-[#2C3E50]">Case Title</h1>
      <h2 className="text-sm font-medium text-gray-400">short description...</h2>
    </div>
  );
};

export default UserCard;
