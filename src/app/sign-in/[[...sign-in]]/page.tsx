import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full flex justify-center align-middle mt-12 bg-green-primary dark:bg-transparent h-[calc(100vh-10px)] ">
      {" "}
      <SignIn />
    </div>
  );
}
