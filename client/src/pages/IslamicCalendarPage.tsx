import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "../contexts/ProgressContext";
import { useLanguage } from "../contexts/LanguageContext";
import { getHijriDate, getIslamicEvents, HijriDate, IslamicEvent } from "../utils/islamicCalendar";

interface CalendarDay {
  gregorianDate: Date;
  hijriDate: HijriDate;
  isToday: boolean;
  events: IslamicEvent[];
}

export default function IslamicCalendarPage() {
  const { updateLastVisited } = useProgress();
  const { direction } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<CalendarDay | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "events">("month");

  useEffect(() => {
    updateLastVisited("/calendar");
  }, [updateLastVisited]);

  // Generate calendar days for current month
  const generateCalendarDays = (): CalendarDay[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days: CalendarDay[] = [];
    const today = new Date();

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const hijriDate = getHijriDate(date);
      const events = getIslamicEvents(hijriDate);
      
      days.push({
        gregorianDate: date,
        hijriDate,
        isToday: date.toDateString() === today.toDateString(),
        events
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const currentHijriDate = getHijriDate(new Date());
  const upcomingEvents = getIslamicEvents(currentHijriDate, 30); // Next 30 days

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
      return newDate;
    });
  };

  const hijriMonths = [
    "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
    "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
  ];

  const gregorianMonths = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const weekDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

  const getEventColor = (event: IslamicEvent) => {
    switch (event.type) {
      case "eid": return "bg-green-500";
      case "holy": return "bg-purple-500";
      case "historical": return "bg-blue-500";
      case "moon": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">calendar_month</span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">التقويم الإسلامي</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-gray-900 dark:text-white mb-4">
            التقويم الهجري والميلادي
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
            تابع التواريخ الهجرية والميلادية مع المناسبات الإسلامية المهمة
          </p>
        </div>

        {/* Current Date Display */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30">
          <CardContent className="p-6 text-center">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-amiri font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                  التاريخ الهجري
                </h3>
                <p className="text-3xl font-amiri font-bold text-gray-900 dark:text-white">
                  {currentHijriDate.day} {hijriMonths[currentHijriDate.month - 1]} {currentHijriDate.year}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-amiri font-bold text-blue-700 dark:text-blue-400 mb-2">
                  التاريخ الميلادي
                </h3>
                <p className="text-3xl font-inter font-bold text-gray-900 dark:text-white">
                  {new Date().getDate()} {gregorianMonths[new Date().getMonth()]} {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <Button
              variant={viewMode === "month" ? "default" : "ghost"}
              onClick={() => setViewMode("month")}
              className={viewMode === "month" ? "bg-emerald-600 text-white" : ""}
            >
              <span className="material-symbols-outlined mr-2 rtl:ml-2">calendar_view_month</span>
              التقويم الشهري
            </Button>
            <Button
              variant={viewMode === "events" ? "default" : "ghost"}
              onClick={() => setViewMode("events")}
              className={viewMode === "events" ? "bg-emerald-600 text-white" : ""}
            >
              <span className="material-symbols-outlined mr-2 rtl:ml-2">event</span>
              المناسبات القادمة
            </Button>
          </div>
        </div>

        {viewMode === "month" ? (
          /* Calendar View */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                        <span className="material-symbols-outlined">chevron_left</span>
                      </Button>
                      <div className="text-center">
                        <h3 className="font-amiri text-lg">
                          {gregorianMonths[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {hijriMonths[currentHijriDate.month - 1]} {currentHijriDate.year}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                        <span className="material-symbols-outlined">chevron_right</span>
                      </Button>
                    </div>
                    
                    <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
                      اليوم
                    </Button>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  {/* Week Days Header */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {weekDays.map((day) => (
                      <div key={day} className="p-2 text-center font-amiri font-bold text-gray-600 dark:text-gray-400 text-sm">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(day)}
                        className={`p-2 min-h-[60px] border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors ${
                          day.isToday ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300" : ""
                        } ${
                          day.gregorianDate.getMonth() !== currentDate.getMonth() ? "opacity-50" : ""
                        }`}
                      >
                        <div className="text-left">
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
                            {day.gregorianDate.getDate()}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-amiri">
                            {day.hijriDate.day}
                          </div>
                          {day.events.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {day.events.slice(0, 2).map((event, eventIndex) => (
                                <div
                                  key={eventIndex}
                                  className={`w-2 h-2 rounded-full ${getEventColor(event)}`}
                                ></div>
                              ))}
                              {day.events.length > 2 && (
                                <div className="text-xs text-gray-500">+{day.events.length - 2}</div>
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Day Details */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-amiri">
                    {selectedDate ? "تفاصيل اليوم" : "اختر يوماً"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <h3 className="font-amiri font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                          {weekDays[selectedDate.gregorianDate.getDay()]}
                        </h3>
                        <p className="text-lg font-amiri text-gray-900 dark:text-white">
                          {selectedDate.hijriDate.day} {hijriMonths[selectedDate.hijriDate.month - 1]} {selectedDate.hijriDate.year}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                          {selectedDate.gregorianDate.getDate()} {gregorianMonths[selectedDate.gregorianDate.getMonth()]} {selectedDate.gregorianDate.getFullYear()}
                        </p>
                      </div>
                      
                      {selectedDate.events.length > 0 ? (
                        <div>
                          <h4 className="font-amiri font-bold text-gray-900 dark:text-white mb-3">
                            مناسبات هذا اليوم
                          </h4>
                          <div className="space-y-2">
                            {selectedDate.events.map((event, index) => (
                              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                  <div className={`w-3 h-3 rounded-full ${getEventColor(event)}`}></div>
                                  <Badge variant="outline" className="text-xs">
                                    {event.type === "eid" ? "عيد" : 
                                     event.type === "holy" ? "مناسبة مقدسة" :
                                     event.type === "historical" ? "تاريخية" : "فلكية"}
                                  </Badge>
                                </div>
                                <h5 className="font-amiri font-bold text-gray-900 dark:text-white mb-1">
                                  {event.title}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                                  {event.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 font-inter">
                          لا توجد مناسبات خاصة في هذا اليوم
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400 font-inter">
                      اضغط على أي يوم في التقويم لرؤية تفاصيله
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Events View */
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-amiri">المناسبات الإسلامية القادمة</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcomingEvents.slice(0, 12).map((event, index) => (
                      <Card key={index} className="card-hover">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                            <div className={`w-4 h-4 rounded-full ${getEventColor(event)}`}></div>
                            <Badge variant="outline" className="text-xs">
                              {event.type === "eid" ? "عيد" : 
                               event.type === "holy" ? "مناسبة مقدسة" :
                               event.type === "historical" ? "تاريخية" : "فلكية"}
                            </Badge>
                          </div>
                          
                          <h3 className="font-amiri font-bold text-gray-900 dark:text-white mb-2">
                            {event.title}
                          </h3>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-inter mb-3">
                            {event.description}
                          </p>
                          
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-amiri">
                            {event.hijriDate.day} {hijriMonths[event.hijriDate.month - 1]} {event.hijriDate.year}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400 font-inter py-8">
                    لا توجد مناسبات إسلامية في الأيام القادمة
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Important Islamic Dates Reference */}
        <Card className="mt-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-amiri font-bold text-gray-900 dark:text-white mb-4 text-center">
              مرجع المناسبات الإسلامية المهمة
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-amiri font-bold text-sm mb-1">الأعياد</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">عيد الفطر وعيد الأضحى</p>
              </div>
              
              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-amiri font-bold text-sm mb-1">المناسبات المقدسة</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">ليلة القدر والمولد النبوي</p>
              </div>
              
              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-amiri font-bold text-sm mb-1">التواريخ التاريخية</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">الإسراء والمعراج والهجرة</p>
              </div>
              
              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-amiri font-bold text-sm mb-1">الأحداث الفلكية</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">بداية الشهور القمرية</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
