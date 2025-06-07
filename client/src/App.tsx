import { Switch, Route, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import QuranPage from "./pages/QuranPage";
import SeerahPage from "./pages/SeerahPage";
import PrayerGuidePage from "./pages/PrayerGuidePage";
import DailyRemindersPage from "./pages/DailyRemindersPage";
import IslamicKnowledgePage from "./pages/IslamicKnowledgePage";
import FivePillarsPage from "./pages/FivePillarsPage";
import WomenInIslamPage from "./pages/WomenInIslamPage";
import SeerahForChildrenPage from "./pages/SeerahForChildrenPage";
import AlMubeenBotPage from "./pages/AlMubeenBotPage";
import IslamicCalendarPage from "./pages/IslamicCalendarPage";
import NotFound from "@/pages/not-found";

function AppContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 islamic-pattern">
      <Header />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/quran" component={QuranPage} />
          <Route path="/seerah" component={SeerahPage} />
          <Route path="/prayer-guide" component={PrayerGuidePage} />
          <Route path="/daily-reminders" component={DailyRemindersPage} />
          <Route path="/islamic-knowledge" component={IslamicKnowledgePage} />
          <Route path="/five-pillars" component={FivePillarsPage} />
          <Route path="/women-in-islam" component={WomenInIslamPage} />
          <Route path="/kids" component={SeerahForChildrenPage} />
          <Route path="/ai-assistant" component={AlMubeenBotPage} />
          <Route path="/calendar" component={IslamicCalendarPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <ProgressProvider>
            <TooltipProvider>
              <Toaster />
              <AppContent />
            </TooltipProvider>
          </ProgressProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
