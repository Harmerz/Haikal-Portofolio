import { Fragment } from "react";
import type { PipelineStage } from "@/data/projects";

export default function PipelineDiagram({ stages }: { stages: PipelineStage[] }) {
  if (stages.length === 0) return null;

  return (
    <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-stretch">
      {stages.map((stage, index) => (
        <Fragment key={`${stage.role}-${index}`}>
          <div
            className="animate-fade-up flex-1 rounded-lg border border-gray-200 bg-gray-50 p-3 text-center"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="text-[10px] font-semibold tracking-wide text-gray-400 uppercase">
              {stage.role}
            </p>
            <p className="text-sm font-medium text-gray-800">{stage.label}</p>
          </div>

          {index < stages.length - 1 && (
            <>
              {/* Desktop: horizontal connector */}
              <div
                className="animate-fade-up relative hidden h-px w-10 self-center bg-gray-200 md:block"
                style={{ animationDelay: `${index * 120 + 60}ms` }}
              >
                <span className="animate-pipe-x absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-700" />
              </div>
              {/* Mobile: vertical connector */}
              <div className="relative h-5 w-px self-center bg-gray-200 md:hidden">
                <span className="animate-pipe-y absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-700" />
              </div>
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
}
