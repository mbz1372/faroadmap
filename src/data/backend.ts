export const backendRoadmap = [
  {
    id: "language",
    title: "زبان برنامه‌نویسی بک‌اند",
    description: "یادگیری یکی از زبان‌های رایج سمت سرور مثل Node.js, Python, PHP",
    children: [
      { id: "nodejs", title: "Node.js" },
      { id: "python", title: "Python" },
      { id: "php", title: "PHP" }
    ]
  },
  {
    id: "database",
    title: "پایگاه داده‌ها",
    description: "مفاهیم SQL و NoSQL مثل MySQL, PostgreSQL, MongoDB",
    children: [
      { id: "mysql", title: "MySQL" },
      { id: "postgresql", title: "PostgreSQL" },
      { id: "mongodb", title: "MongoDB" }
    ]
  },
  {
    id: "api",
    title: "ساخت API",
    description: "RESTful API و مفاهیم HTTP و Express یا FastAPI",
    children: [
      { id: "rest", title: "REST API" },
      { id: "express", title: "Express.js" },
      { id: "fastapi", title: "FastAPI" }
    ]
  }
];
