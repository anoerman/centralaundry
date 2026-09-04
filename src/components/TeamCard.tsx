import Image from "next/image";
import type { TeamMember } from "@/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 text-center shadow-sm">
      <Image
        src={member.image}
        alt={member.name}
        width={96}
        height={96}
        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-brand-navy">{member.name}</h3>
      <p className="text-sm font-medium text-brand-blue">{member.title}</p>
      <p className="mt-2 text-sm text-gray-600">{member.description}</p>
    </div>
  );
}
