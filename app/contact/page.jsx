import Link from "next/link";

import prisma from "@/utils/db";

const createTask = async () => {
  await prisma.task.create({
    data: {
      content: "hello!",
    },
  });
};
const getTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function ContactPage() {
  await createTask();
  const tasks = await getTasks();

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl">ContactPage</h1>
      <Link href="/" className="text-xl mb-8">
        home page
      </Link>

      {tasks.length === 0 && <div>no tasks</div>}
      {tasks.length !== 0 && (
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
