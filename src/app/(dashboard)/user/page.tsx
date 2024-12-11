import EventCalendar from "@/app/(dashboard)/user/EventCalendar";
import FloatingChatbot from "@/components/FloatingChatbot";
import YourCases from "@/app/(dashboard)/user/YourCases";

const UserPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <YourCases />
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

export default UserPage;
