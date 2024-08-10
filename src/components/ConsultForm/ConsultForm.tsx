"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useToast } from "@chakra-ui/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CourseConsultTypes } from "@/types/types";
import { PHONE_REGEXP } from "@/lib/utils";
import { Spinner } from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";

const formSchema = z.object({
  name: z
    .string({ required_error: "Es obligatorio ingresar el nombre y apellido" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  phone: z
    .string({
      required_error: "El número de teléfono es obligatorio",
      invalid_type_error: "Debe ingresar números*",
    })
    .max(10, { message: "El número debe contener 10 caracteres como máximo*" })
    .min(10, { message: "El número debe contener 10 caracteres como mínimo*" })
    .regex(PHONE_REGEXP),
  email: z
    .string({ required_error: "El E-mail es obligatorio." })
    .email({ message: "El email ingresado es invalido." }),
  courseNumber: z.string(),
});

export const ConsultForm = ({
  price,
  title,
  setIsModal,
}: CourseConsultTypes) => {
  const toast = useToast();

  const [loading, setloading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      courseNumber: `${title} $${price}`,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setloading(true);
      await axios.post("/api/consult", values);
      toast({
        title: "Consulta realizada",
        description: "Hemos recibido tu consulta.",
        status: "success",
        duration: 3500,
        isClosable: true,
      });
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Ocurrió un error",
        description: "Surgió un error inesperado al enviar el formulario",
        status: "error",
        duration: 3500,
        isClosable: true,
      });
      setloading(false);
    } finally {
      setIsModal(false);
      setloading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">
                Nombre y Apellido
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese Nombre y Apellido*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">
                Número de teléfono:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese número de teléfono*"
                  {...field}
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">
                Email:
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese dirección de E-mail*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">
                Curso:
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled
                  value={`${title} $${price}`}
                  title={`${title} $${price}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="disabled:bg-slate-800/80 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Enviar"}
        </Button>

        <Button
          type="reset"
          className="bg-violet-400 hover:bg-violet-300 disabled:bg-violet-400/80 disabled:cursor-not-allowed"
          onClick={() => form.reset()}
          disabled={loading}
        >
          {loading ? <Spinner /> : "Limpiar formulario"}
        </Button>
      </form>
    </Form>
  );
};
