"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TasksPage = () => {
  const tasks = useQuery(api.tasks.getTasks);
  const deleteTask = useMutation(api.tasks.deleteTask);
  const addTask = useMutation(api.tasks.addTask);
  const [task, setTask] = useState("");

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-5xl"> All tasks are here in real-time</h1>
      <Input
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      |{" "}
      <Button
        variant={"secondary"}
        onClick={async () => {
          await addTask({ text: task });
          setTask("");
        }}
      >
        Add
      </Button>
      <hr></hr>
      {tasks?.map((task) => (
        <div key={task._id} className="flex gap-2">
          <span>{task.text}</span>
          <button
            onClick={async () => {
              await deleteTask({ id: task._id });
            }}
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
};
export default TasksPage;
