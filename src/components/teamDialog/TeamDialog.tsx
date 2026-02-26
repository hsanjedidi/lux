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
          {/* Section Image - Largeur augmentée (420px) */}
          <div className="relative w-full md:w-[420px] shrink-0 overflow-hidden group border-r border-white/5">
            <img
              src={member?.image}
              alt={member?.name}
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out scale-[1.01] group-hover:scale-100"
            />
            {/* Overlay pour une transition fluide vers le noir */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
          </div>

          {/* Section Contenu - Luxe Typographique */}
          <div className="flex flex-col flex-1 p-10 md:p-16 bg-[#0c0c0c]">
            <DialogHeader className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-10 bg-primary/50" />
                <DialogDescription className="text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500">
                  {member?.role}
                </DialogDescription>
              </div>
              <DialogTitle className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-white italic">
                {member?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-8 flex-1 relative">
              {/* Guillemet stylisé */}
              <span className="absolute -top-10 -left-4 text-7xl font-serif text-white/5 select-none italic">
                “
              </span>

              <p className="text-[15px] text-zinc-400 leading-[1.8] font-light italic antialiased tracking-wide">
                {member?.description}
              </p>
            </div>

            {/* Footer - Social & Action */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex gap-8">
                <a
                  href="#"
                  className="text-zinc-500 hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 stroke-[1.5px]" />
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 stroke-[1.5px]" />
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 stroke-[1.5px]" />
                </a>
              </div>

              <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                <span className="group-hover:tracking-[0.4em] transition-all duration-500">
                  Explorer le Portfolio
                </span>
                <div className="w-12 h-[1px] bg-primary/60 group-hover:w-20 transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDialog;
