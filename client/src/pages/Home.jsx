import { useState, useEffect } from "react";

export default function Home() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    // call to API to get stats
    const fetchStats = async () => {
      //   const stats = await api.get("/stats");
      setStats(stats);
    };

    fetchStats();
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>

      <div className="stats">
        <div className="stat">
          <div className="value">{stats.teachersCount}</div>
          <div className="label">Teachers</div>
        </div>

        <div className="stat">
          <div className="value">{stats.studentsCount}</div>
          <div className="label">Students</div>
        </div>

        <div className="stat">
          <div className="value">{stats.coursesCount}</div>
          <div className="label">Courses</div>
        </div>
      </div>
    </div>
  );
}
