"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useToast } from "@chakra-ui/react";
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
import { Select, SelectFirst, SelectItem } from "../ui/custom-select";
import { PHONE_REGEXP } from "@/lib/utils";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

import axios from "axios";
import { ICoursesPrices } from "@/models/CoursesPrices";

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
  course: z
    .string({ required_error: "Seleccione una opción" })
    .min(1, "Debe seleccionar una opción"),
  availability: z
    .string({ required_error: "Debe ingresar una descripción" })
    .min(10, { message: "Debe ingresar al menos 10 caracteres" }),
});

export const ContactForm = () => {
  const [coursesPrices, setCoursesPrices] = useState<ICoursesPrices[]>(
    []
  );
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch(
        "https://driverschool-two.vercel.app/api/prices/",
        { cache: "no-store" }
      );

      if(!res.ok){
        throw new Error("Failing to fetch data")
      }

      const data = await res.json()

      setCoursesPrices(data)
    };

    fetchCourses()
  }, []);
  const [course, setCourse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      course: "",
      availability: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post("/api/contact", values);
      toast({
        title: "Se ha enviado la información.",
        description: "Nos contactaremos a la brevedad",
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
        isClosable: true,
      });
      setLoading(false);
    } finally {
      setLoading(false);
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
              <FormLabel className="text-pink-600 font-semibold">
                Nombre y Apellido
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese nombre y apellido*"
                  {...field}
                  className="border-pink-600 focus-visible:shadow-sm focus-visible:shadow-pink-500 text-pink-600"
                />
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
              <FormLabel className="text-pink-600 font-semibold">
                Nro. de Teléfono:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese número de teléfono*"
                  {...field}
                  className="border-pink-600 focus-visible:shadow-sm focus-visible:shadow-pink-500 text-pink-600"
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
              <FormLabel className="text-pink-600 font-semibold">
                E-Mail
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese un E-mail*"
                  {...field}
                  className="border-pink-600 focus-visible:shadow-sm focus-visible:shadow-pink-500 text-pink-600"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-pink-600 font-semibold space-y-3">
                Curso
              </FormLabel>

              <Select handleChange={field.onChange}>
                <FormControl>
                  <SelectFirst placeholder="Seleccione un curso*" />
                </FormControl>

                {coursesPrices.map(({ id, title }) => (
                  <SelectItem key={id} value={title} />
                ))}
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel className="text-pink-600 font-semibold">
                Disponibilidad horaria
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Disponibilidad horaria (ejemplo: Lun, Mar, Juev de 14 a 18hs)"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="place-self-center sm:place-self-end bg-pink-600 hover:bg-pink-700 min-w-[150px] disabled:bg-pink-600/70 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Enviar"}
        </Button>

        <Button
          className="place-self-center sm:place-self-start bg-indigo-600 hover:bg-indigo-700 min-w-[150px] disabled:bg-indigo-600/70 disabled:cursor-not-allowed"
          type="reset"
          disabled={loading}
          onClick={() => {
            form.reset();
            form.setValue("course", "");
          }}
        >
          Limpiar formulario
        </Button>
      </form>
    </Form>
  );
};
