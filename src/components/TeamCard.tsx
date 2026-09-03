import type { TeamMember } from "@/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 text-center shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.image}
        alt={member.name}
        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-brand-navy">{member.name}</h3>
      <p className="text-sm font-medium text-brand-blue">{member.title}</p>
      <p className="mt-2 text-sm text-gray-600">{member.description}</p>
    </div>
  );
}
