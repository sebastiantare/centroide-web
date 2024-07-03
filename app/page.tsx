import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import Articles from "@/components/home/articles";
import { SessionProvider } from "next-auth/react";
import App from "./_app";

export default async function Home() {
  return ( 
    <>
      <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
        <Articles />
      </div>
    </>
  );
}
