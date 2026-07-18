"use client";

import * as React from "react";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";

// Mock data
const analytics = { booksListed: 12, exchangesCompleted: 5, totalSavings: "$45" };
const recentBooks = [
  { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: "2", title: "1984", author: "George Orwell" },
];
const wishlist = [
  { id: "3", title: "To Kill a Mockingbird", author: "Harper Lee" },
];
const exchangeRequests = [
  { id: "req1", from: "Alice", book: "The Great Gatsby" },
];
const notifications = ["Your exchange request was accepted!", "New book added to your wishlist."];
const recentActivity = ["Exchanged '1984' with Bob", "Added 'The Great Gatsby' to wishlist"];
const aiSuggestions = [
  "Consider listing classic literature to attract more trades.",
  "Offer a discount for bulk exchanges.",
];

export default function DashboardPage() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <header className="flex items-center gap-4 mb-6">
        <LayoutDashboard className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
      </header>

      {/* Grid layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Analytics */}
        <Card className="bg-background/30 glass-heavy p-4">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-2xl font-semibold text-foreground">{analytics.booksListed}</p>
              <p className="text-sm text-muted-foreground">Books Listed</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{analytics.exchangesCompleted}</p>
              <p className="text-sm text-muted-foreground">Exchanges</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{analytics.totalSavings}</p>
              <p className="text-sm text-muted-foreground">Savings</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Books */}
        <Card className="bg-background/30 glass-heavy p-4">
          <CardHeader>
            <CardTitle>Recent Books</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentBooks.map((b) => (
                <li key={b.id} className="text-foreground">
                  {b.title} – <span className="text-muted-foreground text-sm">{b.author}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Wishlist */}
        <Card className="bg-background/30 glass-heavy p-4">
          <CardHeader>
            <CardTitle>Wishlist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {wishlist.map((b) => (
                <li key={b.id} className="text-foreground">
                  {b.title} – <span className="text-muted-foreground text-sm">{b.author}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-2 w-full" onClick={() => alert('Add to wishlist (mock)')}>Add New</Button>
          </CardContent>
        </Card>

        {/* Exchange Requests */}
        <Card className="bg-background/30 glass-heavy p-4">
          <CardHeader>
            <CardTitle>Exchange Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {exchangeRequests.map((req) => (
                <li key={req.id} className="text-foreground">
                  {req.from} wants &quot;{req.book}&quot;<br />
                  <Button variant="secondary" size="sm" className="mt-1" onClick={() => alert('Accept request (mock)')}>Accept</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-background/30 glass-heavy p-4">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {notifications.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Savings */}
        <Card className="bg-background/30 glass-heavy p-4">
          <CardHeader>
            <CardTitle>Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-foreground">{analytics.totalSavings}</p>
            <Button variant="ghost" size="sm" onClick={() => alert('View savings history (mock)')}>View History</Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-background/30 glass-heavy p-4 xl:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-foreground">
              {recentActivity.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card className="bg-background/30 glass-heavy p-4 xl:col-span-2">
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-foreground">
              {aiSuggestions.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
