import type { Metadata } from "next";
import RootDocument from "@/components/RootDocument";
import { getResumeMessages } from "@/lib/resume-messages";

const { profile } = getResumeMessages("ko");

export const metadata: Metadata = {
  title: `${profile.title.content} - ${profile.subtitle}`,
  description: profile.description,
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument language="ko">{children}</RootDocument>;
}
