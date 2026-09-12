"use client";

import React from "react";
import { TextItem } from "@/types/common";

interface SkillTagsProps {
  skills: TextItem[];
}

export default function SkillTags({ skills }: SkillTagsProps) {
  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="skill-tag px-3 py-1 bg-resume-accent-soft text-resume-accent-strong rounded-full text-xs border border-resume-border print:px-2 print:py-0.5 print:text-xs"
          >
            {skill.content}
          </span>
        ))}
      </div>
    </div>
  );
}
