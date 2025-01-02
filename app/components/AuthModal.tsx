import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try For Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row justify-center">
          <h4 className="text-3xl font-semibold">
            Plan<span className="text-primary">RR</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
            className="w-full">
            <GoogleAuthButton />
          </form>

          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
            className="w-full">
            <GithubAuthButton/>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
