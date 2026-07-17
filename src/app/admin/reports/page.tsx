"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Flag, Eye, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

const MOCK_REPORTS = [
  { id: "r1", type: "Fake Listing", target: "Data Structures Book", reportedBy: "Alex J.", status: "OPEN", date: "Today" },
  { id: "r2", type: "Inappropriate Messages", target: "User: Mike T.", reportedBy: "Sarah S.", status: "OPEN", date: "Yesterday" },
  { id: "r3", type: "Spam", target: "Listing #4421", reportedBy: "Rahul M.", status: "RESOLVED", date: "Oct 12" },
];

export default function AdminReportsPage() {
  const [reports, setReports] = React.useState(MOCK_REPORTS);

  const resolveReport = (id: string) => {
    toast.success("Report marked as resolved.");
    setReports(reports.map(r => r.id === id ? { ...r, status: "RESOLVED" } : r));
  };

  return (
    <div className="space-y-6 pb-12">
      
      <FadeIn>
        <h1 className="text-2xl font-bold tracking-tight">User Reports</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage and resolve issues submitted by the community.</p>
      </FadeIn>

      <FadeIn delay={0.1} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Report Type</th>
                <th className="px-6 py-4">Target</th>
                <th className="px-6 py-4">Reported By</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4 text-amber-500" />
                      <span className="font-bold text-foreground">{report.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{report.target}</td>
                  <td className="px-6 py-4 text-muted-foreground">{report.reportedBy}</td>
                  <td className="px-6 py-4 text-muted-foreground">{report.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold tracking-wider ${
                      report.status === "OPEN" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="View Details">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Message User">
                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      {report.status === "OPEN" && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 px-3 text-xs bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300"
                          onClick={() => resolveReport(report.id)}
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Resolve
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  );
}
