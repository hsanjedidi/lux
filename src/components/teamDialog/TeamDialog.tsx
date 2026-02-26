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

const TeamDialog = ({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) => {
  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{member?.name}</DialogTitle>
          <DialogDescription>{member?.role}</DialogDescription>
        </DialogHeader>
        <div>
          <img src={member?.image} alt={member?.name} />
          <p>{member?.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDialog;
