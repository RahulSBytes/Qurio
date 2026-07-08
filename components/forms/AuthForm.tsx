"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface AuthFormProps<T extends FieldValues> {
  FormType: "SIGN_IN" | "SIGN_UP";
  schema: z.ZodType<T, z.ZodTypeDef, T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<ActionResponse>;
}

export function AuthForm<T extends FieldValues>({
  FormType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) {

  const router = useRouter();

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = (await onSubmit(data)) as ActionResponse;

    if (result?.success) {
      toast({
        title: "Success",
        description: FormType === "SIGN_IN" ? "You have successfully signed in." : "You have successfully signed up.",
      });

      router.replace(ROUTES.HOME);
    } else {
      toast({
        title: `Error (${result?.status})`,
        description: result?.error?.message,
        variant: "destructive",
      });
    }
  };

  const ButtonText = FormType === "SIGN_UP" ? "Sign up" : "Sign in";

  return (
    <Form {...form}>
      
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-4 px-8"
      >
        {Object.keys(defaultValues).map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {fieldName === "email"
                    ? "Email Address"
                    : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                </FormLabel>

                <FormControl className="border border-zinc-800 bg-zinc-800/20">
                  <Input
                    required
                    className="my-1"
                    type={fieldName === "password" ? "password" : "text"}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
           className="primary-gradient paragraph-medium rounded-2 font-inter text-light-900! min-h-12 w-full px-4 py-3"
        >
          {form.formState.isSubmitting
            ? FormType === "SIGN_IN"
              ? "Signing in..."
              : "Signing up..."
            : ButtonText}
        </Button>
      </form>
       {FormType === "SIGN_IN" ? (
        <p className="paragraph-regular text-dark400_light700 mt-6 text-center">
          Don’t have an account?{" "}
          <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">
            Sign up
          </Link>
        </p>
      ) : (
        <p className="paragraph-regular text-dark400_light700 mt-6 text-center">
          Already have an account?{" "}
          <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">
            Sign in
          </Link>
        </p>
      )}
    </Form>
  );
}
