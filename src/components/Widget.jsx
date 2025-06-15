import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import tailwindStyles from "../index.css?inline";
import { MessageCircleIcon, StarIcon } from "lucide-react";

const Widget = () => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const onSelectStar = (index) => {
    setRating(index + 1);
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      p_user_name: form.name.value,
      p_user_email: form.email.value,
      p_message: form.feedback.value,
      p_rating: rating,
    };
    setSubmitted(true);
    console.log(data);
  };

  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="default"
              className="rounded-full shadow-lg px-5 py-2 gap-2 bg-primary text-white hover:scale-105 transition-transform duration-200"
            >
              <MessageCircleIcon className="h-5 w-5" />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-xl bg-white dark:bg-zinc-900 shadow-2xl w-[380px] p-5 border border-muted">
            <style>{tailwindStyles}</style>
            {submitted ? (
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-semibold text-primary">
                  🎉 Thank You!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your feedback helps us improve. We really appreciate your
                  time!
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Send Feedback
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We’d love to hear your thoughts!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Let us know what you think..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`h-5 w-5 cursor-pointer transition-colors ${
                          rating > index
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted stroke-muted-foreground hover:fill-yellow-300 hover:text-yellow-300"
                        }`}
                        onClick={() => onSelectStar(index)}
                      />
                    ))}
                  </div>
                  <Button
                    type="submit"
                    className="px-4 text-white bg-primary hover:bg-primary/90"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
            <Separator className="my-4" />
            <div className="text-center text-xs text-muted-foreground">
              Powered by{" "}
              <a
                href="https://nexx-saas.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Widgetly ⚡️
              </a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Widget;
