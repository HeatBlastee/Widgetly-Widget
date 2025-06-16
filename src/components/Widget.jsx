import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import tailwindStyles from "../index.css?inline";
import supabase from "../supabaseClient";
import { MessageCircleIcon, StarIcon } from "lucide-react";

const Widget = ({ projectId }) => {
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onSelectStar = (index) => {
    setRating(index + 1);
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      p_project_id: projectId,
      p_user_name: form.name.value,
      p_user_email: form.email.value,
      p_message: form.feedback.value,
      p_rating: rating,
    };
    const { data: returnedData } = await supabase.rpc("add_feedback", data);
    setSubmitted(true);
    console.log(returnedData);
  };

  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full shadow-lg transition-transform hover:scale-105 bg-indigo-600 hover:bg-indigo-700 text-white">
              <MessageCircleIcon className="mr-2 h-5 w-5" />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
            <style>{tailwindStyles}</style>
            {submitted ? (
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-semibold text-green-600">
                  🎉 Thank you for your feedback!
                </h3>
                <p className="text-gray-700">
                  We really appreciate it. Your insights help us improve.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Send us your feedback
                </h3>
                <form className="space-y-4" onSubmit={submit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="feedback">Message</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Write your feedback here..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          onMouseEnter={() => setHoverRating(index + 1)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => onSelectStar(index)}
                          className={`h-5 w-5 cursor-pointer transition-colors ${
                            (hoverRating || rating) > index
                              ? "fill-yellow-400 stroke-yellow-500"
                              : "fill-gray-200 stroke-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      type="submit"
                      className="px-6 bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            )}
            <Separator className="my-4" />
            <p className="text-center text-xs text-gray-500">
              Powered by{" "}
              <a
                href="https://widgetly.vercel.app/"
                className="font-medium text-indigo-600 hover:underline"
              >
                Widgetly ⚡️
              </a>
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Widget;
