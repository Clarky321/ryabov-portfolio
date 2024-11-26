"use client"

import React, {useEffect, useState} from "react";
import axios from "axios";
import ActivityCalendar from "./ActivityCalendar";

export default function GitHubStats() {
    const [reposCount, setReposCount] = useState(0);

    useEffect(() => {

        // Получение количества репозиториев
        axios.get("https://api.github.com/users/Clarky321")
        .then((res) => setReposCount(res.data.public_repos));
    })

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold">Статистика GitHub</h3>
                <div className="flex flex-col gap-4">
                    <p>
                        Количество репозиториев: <strong>{reposCount}</strong>
                    </p>
                </div>
                <ActivityCalendar/>
        </div>
    )
}