import type { Audience } from "@/lib/audience";

type AudienceToggleProps = {
  audience: Audience;
  onChange: (audience: Audience) => void;
  labels?: [string, string];
};

export default function AudienceToggle({
  audience,
  onChange,
  labels = ["I'm job hunting", "I'm hiring"],
}: AudienceToggleProps) {
  return (
    <div className="segmented" role="group" aria-label="Choose your view">
      <button
        type="button"
        aria-pressed={audience === "candidate"}
        onClick={() => onChange("candidate")}
      >
        {labels[0]}
      </button>
      <button
        type="button"
        aria-pressed={audience === "recruiter"}
        onClick={() => onChange("recruiter")}
      >
        {labels[1]}
      </button>
    </div>
  );
}
