import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ProgressData {
  lastVisitedPage: string;
  completedLessons: string[];
  currentStreak: number;
  totalPoints: number;
  bookmarks: string[];
  readingProgress: Record<string, number>;
}

interface ProgressContextType {
  progress: ProgressData;
  updateLastVisited: (page: string) => void;
  completeLesson: (lessonId: string) => void;
  addBookmark: (contentId: string) => void;
  removeBookmark: (contentId: string) => void;
  updateReadingProgress: (contentId: string, progress: number) => void;
  getResumeSession: () => { page: string; title: string } | null;
  bookmarks: string[];
  toggleBookmark: (contentId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined,
);

const initialProgress: ProgressData = {
  lastVisitedPage: "/",
  completedLessons: [],
  currentStreak: 0,
  totalPoints: 0,
  bookmarks: [],
  readingProgress: {},
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem("alkitab-progress");
    return saved ? JSON.parse(saved) : initialProgress;
  });

  useEffect(() => {
    localStorage.setItem("alkitab-progress", JSON.stringify(progress));
  }, [progress]);

  const updateLastVisited = (page: string) => {
    setProgress((prev) => ({ ...prev, lastVisitedPage: page }));
  };

  const completeLesson = (lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])],
      totalPoints: prev.totalPoints + 10,
    }));
  };

  const addBookmark = (contentId: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarks: [...new Set([...prev.bookmarks, contentId])],
    }));
  };

  const removeBookmark = (contentId: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.filter((id) => id !== contentId),
    }));
  };

  const updateReadingProgress = (contentId: string, progressValue: number) => {
    setProgress((prev) => ({
      ...prev,
      readingProgress: {
        ...prev.readingProgress,
        [contentId]: progressValue,
      },
    }));
  };

  const getResumeSession = () => {
    if (progress.lastVisitedPage === "/") return null;

    const pageNames: Record<string, string> = {
      "/quran": "القرآن الكريم",
      "/seerah": "السيرة النبوية",
      "/prayer-guide": "دليل الصلاة",
      "/daily-reminders": "التذكيرات اليومية",
      "/islamic-knowledge": "المعرفة الإسلامية",
      "/five-pillars": "أركان الإسلام",
      "/women-in-islam": "المرأة في الإسلام",
      "/kids": "قسم الأطفال",
      "/ai-assistant": "المساعد الذكي",
      "/calendar": "التقويم الإسلامي",
    };

    return {
      page: progress.lastVisitedPage,
      title: pageNames[progress.lastVisitedPage] || "الصفحة السابقة",
    };
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateLastVisited,
        completeLesson,
        addBookmark,
        removeBookmark,
        updateReadingProgress,
        getResumeSession,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
