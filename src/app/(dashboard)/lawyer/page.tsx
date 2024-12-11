import NumberChart from "@/components/NumberChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/app/(dashboard)/lawyer/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import FloatingChatbot from "@/components/FloatingChatbot";


const LawyerPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-start overflow-x-auto scroll-smooth pb-6">
          <UserCard type="High" />
          <UserCard type="Low" />
          <UserCard type="Medium" />
          <UserCard type="High" />
          <UserCard type="Low" />
          <UserCard type="High" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <NumberChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
      <div>
      <FloatingChatbot />
    </div>
    </div>
    
  );
};

export default LawyerPage;
