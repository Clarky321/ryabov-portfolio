import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function ActivityCalendar() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Активность на GitHub</h3>
            <GitHubCalendar username="Clarky321" />
        </div>
    );
}