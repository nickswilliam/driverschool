"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { coursesPrices } from "@/data/car-courses-prices";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { signIn } from "next-auth/react";

import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  userName: z
    .string({ required_error: "Es obligatorio ingresar el nombre de usuario" })
    .min(6, { message: "Debe ingresar al menos 6 caracteres" }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(8, { message: "La contraseña es obligatoria 8 caracteres*" }),
});

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      setError(null)
      const res = await signIn("credentials", { ...values, redirect: false });

      if (res?.error) {
        setError("Datos ingresados incorrectos");
        return;
      }

      router.replace("/panel/admin/user/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel className="text-gray-100 font-semibold flex gap-2 items-center">
                <FaUserAlt />
                Usuario:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese nombre de usuario*"
                  {...field}
                  className="border-gray-100 focus-visible:shadow-sm focus-visible:shadow-cyan-500 text-gray-100 text-xl"
                />
              </FormControl>
              <FormMessage className="text-orange-200" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel className="text-gray-100 font-semibold flex gap-2 items-center">
                <RiLockPasswordFill />
                Contraseña:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese contraseña*"
                  {...field}
                  className="border-gray-100 focus-visible:shadow-sm focus-visible:shadow-cyan-500 text-gray-100 text-xl"
                  type="password"
                />
              </FormControl>
              <FormMessage className="text-orange-200" />
            </FormItem>
          )}
        />

        {error && <span className="bg-red-600 rounded-md px-6 py-2 text-white">{error}</span>}

        <Button
          className="mt-4 mx-10 disabled:bg-slate-900/90"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Ingresar"}
        </Button>
      </form>
    </Form>
  );
};
