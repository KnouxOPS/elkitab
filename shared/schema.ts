import {
  pgTable,
  text,
  serial,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  preferredLanguage: text("preferred_language").default("ar"),
  theme: text("theme").default("light"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  lastVisitedPage: text("last_visited_page").default("/"),
  completedLessons: jsonb("completed_lessons").default([]),
  currentStreak: integer("current_streak").default(0),
  totalPoints: integer("total_points").default(0),
  bookmarks: jsonb("bookmarks").default([]),
  readingProgress: jsonb("reading_progress").default({}),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const prayerTimes = pgTable("prayer_times", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  location: text("location").notNull(),
  latitude: text("latitude").notNull(),
  longitude: text("longitude").notNull(),
  timezone: text("timezone").notNull(),
  notificationsEnabled: boolean("notifications_enabled").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const progress = pgTable("progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  contentType: text("content_type").notNull(), // "verse", "hadith", "seerah", "knowledge"
  contentId: text("content_id").notNull(),
  progressPercentage: integer("progress_percentage").default(0),
  completed: boolean("completed").default(false),
  timeSpent: integer("time_spent").default(0), // in minutes
  lastAccessed: timestamp("last_accessed").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const prayerSettings = pgTable("prayer_settings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  location: text("location").notNull(),
  latitude: text("latitude").notNull(),
  longitude: text("longitude").notNull(),
  timezone: text("timezone").notNull(),
  notificationsEnabled: boolean("notifications_enabled").default(true),
  reminderMinutes: integer("reminder_minutes").default(10),
  calculationMethod: text("calculation_method").default("MWL"), // Muslim World League
  madhab: text("madhab").default("Shafi"), // Hanafi, Shafi, Maliki, Hanbali
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  contentType: text("content_type").notNull(), // "verse", "hadith", "seerah", "knowledge"
  contentId: text("content_id").notNull(),
  title: text("title").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const islamicContent = pgTable("islamic_content", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // "verse", "hadith", "seerah", "pillar", "knowledge"
  category: text("category").notNull(),
  title: text("title").notNull(),
  content: jsonb("content").notNull(), // Multi-language content
  metadata: jsonb("metadata").default({}),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatSessions = pgTable("chat_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  messages: jsonb("messages").default([]),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Schema validation
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true,
  updatedAt: true,
});

export const insertProgressSchema = createInsertSchema(progress).omit({
  id: true,
  createdAt: true,
  lastAccessed: true,
});

export const insertPrayerTimesSchema = createInsertSchema(prayerTimes).omit({
  id: true,
  updatedAt: true,
});

export const insertPrayerSettingsSchema = createInsertSchema(
  prayerSettings,
).omit({
  id: true,
  updatedAt: true,
});

export const insertBookmarkSchema = createInsertSchema(bookmarks).omit({
  id: true,
  createdAt: true,
});

export const insertIslamicContentSchema = createInsertSchema(
  islamicContent,
).omit({
  id: true,
  createdAt: true,
});

export const insertChatSessionSchema = createInsertSchema(chatSessions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type UserProgress = typeof userProgress.$inferSelect;
export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;

export type PrayerTimes = typeof prayerTimes.$inferSelect;
export type InsertPrayerTimes = z.infer<typeof insertPrayerTimesSchema>;

export type Bookmark = typeof bookmarks.$inferSelect;
export type InsertBookmark = z.infer<typeof insertBookmarkSchema>;

export type IslamicContent = typeof islamicContent.$inferSelect;
export type InsertIslamicContent = z.infer<typeof insertIslamicContentSchema>;

export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;
