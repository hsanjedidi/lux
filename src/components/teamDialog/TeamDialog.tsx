import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { TeamMember } from "@/pages/TeamSection";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamDialog = ({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) => {
  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_50px_-12px_rgba(0,0,0,0.9)]">
        <div className="flex flex-col md:flex-row min-h-[550px]">
          {/* Section Image — masquée sur mobile */}
          <div className="hidden md:block relative md:w-[420px] shrink-0 overflow-hidden group md:border-r border-white/5">
            <img
              src={member?.image}
              alt={member?.name}
              className="w-full h-full object-cover object-top grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out scale-[1.01] group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
          </div>

          {/* Section Contenu */}
          <div className="flex flex-col flex-1 p-6 sm:p-8 md:p-16 bg-[#0c0c0c]">
            <DialogHeader className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-10 bg-primary/50" />
                <DialogDescription className="text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500">
                  {member?.role}
                </DialogDescription>
              </div>
              <DialogTitle className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white italic">
                {member?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-5 md:mt-8 flex-1 relative">
              <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-5xl md:text-7xl font-serif text-white/5 select-none italic">
                "
              </span>
              <p className="text-[14px] md:text-[15px] text-zinc-400 leading-[1.8] font-light italic antialiased tracking-wide">
                {member?.description}
              </p>
            </div>

            {/* Footer - Social & Action */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDialog;
