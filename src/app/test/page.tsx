"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="p-10 space-y-6">
      <Button>Default Button</Button>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Shadcn UI</CardTitle>
        </CardHeader>
        <CardContent>This is a card using Shadcn components.</CardContent>
      </Card>
      <Input placeholder="Type something..." />
      <Dialog>
        <DialogTrigger>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <p>Hello from the dialog!</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

