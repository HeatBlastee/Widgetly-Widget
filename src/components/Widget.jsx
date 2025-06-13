import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MessageCircleIcon, StarIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Widget = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const onSelectstart = (index) => {
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
  }

  return (
    <>
      <div className="widget fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              className="rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircleIcon className="mr-2 h-5 w-5" />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md">
            {submitted ? (
              <div>
                <h3 className="text-lg font-bold">
                  Thank you for your feedback!
                </h3>
                <p className="mt-4">
                  We appreciate your feedback. It helps us improve our product
                  and provide better service to our customers.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold">Send us your feedback</h3>
                <form className="space-y-2" onSubmit={submit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Tell us what you think"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          className={`h-5 w-5 cursor ${
                            rating > index
                              ? "fill-primary"
                              : "fill-muted stroke-muted-foreground"
                          }`}
                          onClick={() => onSelectstart(index)}
                        />
                      ))}
                    </div>
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            )}
            <Separator className="my-4" />
            <div className="text-gray-600">
              Powered by{" "}
              {/* <a
                href="https://nexx-saas.vercel.app/"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                Nexx ⚡️ */}
              {/* </a> */}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Widget;
