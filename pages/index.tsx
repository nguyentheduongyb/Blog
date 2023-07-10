import React from "react";
import { MyPage } from "~/pages/components/layout/types";
const HomePage: MyPage = () => {
  return (
    <div className="w-[800px] mx-auto pt-8">
      <div className="flex gap-8 mb-6">
        <div className="w-32">hello</div>
        <div>
          <h3 className="">Nguyễn Thế Dương</h3>
          <h6 className="text-slate-400">Frontend developer passionate about software engineering.</h6>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4">Handling user authentication with Redux Toolkit</h1>
      <p className="mb-4 text-sm">July 12, 2022  17 min read </p>

      <article>
        <p>User authentication can be handled in a myriad of ways. Because of this feature’s importance, we’ve seen more companies provide authentication solutions to ease the process — Firebase, Auth0, and NextAuth.js, to name a few.</p>
      </article>
    </div>
  );
};
export default HomePage;
HomePage.Layout = "Default";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.