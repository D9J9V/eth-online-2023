"use client";

import { useEffect } from "react";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

function SessionProvider({ children, session }: Props) {
  useEffect(() => {
    console.log(session);
  }, [session]);
  return <Provider>{children}</Provider>;
}

export default SessionProvider;
