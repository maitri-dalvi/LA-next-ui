    import BigCalendar from "@/components/BigCalender";
    import EventCalendar from "@/app/(dashboard)/lawyer/EventCalendar";

    const DiaryPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
            <div className="h-full bg-white p-4 rounded-xl">
            <h1 className="text-xl font-semibold">Schedule</h1>
            <BigCalendar/>
            </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-8 rounded-xl">
            <EventCalendar />
        </div>
        </div>
    );
    };

    export default DiaryPage;