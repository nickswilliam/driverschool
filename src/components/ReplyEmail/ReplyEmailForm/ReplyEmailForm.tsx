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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";

import axios from "axios";

import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import { translateSection } from "@/utils/translate-section";
import { useSession } from "next-auth/react";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useToggleReply from "@/state/mailReplyState";

const formSchema = z.object({
  subject: z
    .string({ required_error: "Es obligatorio ingresar el nombre y apellido" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),

  email: z
    .string({ required_error: "El E-mail es obligatorio." })
    .email({ message: "El email ingresado es invalido." }),
  textEmailArea: z
    .string({ required_error: "Debe ingresar una descripción" })
    .min(10, { message: "Debe ingresar al menos 10 caracteres" }),
});

export const ReplyEmailForm = ({
  _id,
  email,
  emailData,
  name,
  phone,
  section,
}: IEmailActions) => {
  const { toggleReply } = useToggleReply();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: `Re: ${translateSection(section)}`,
      email: email,
      textEmailArea: `
      
    ------------------------------------------------------
    Datos de consulta realizada:

    Nombre: ${name},
    Teléfono: ${phone},
    Email: ${email},
    ${emailData.course ? `Curso: ${emailData.course}` : ""}
    ${
      emailData.coursePriceList
        ? `Curso y precio: ${emailData.coursePriceList}`
        : ""
    }
    ${emailData.courseNumber ? `Curso y precio: ${emailData.courseNumber}` : ""}
    ${emailData.payways ? `Metodo de Pago: ${emailData.payways}` : ""}
    ${emailData.address ? `Dirección: ${emailData.address}` : ""}
    ${
      emailData.inBetweenStreet
        ? `Entre calles: ${emailData.inBetweenStreet}`
        : ""
    }
    ${emailData.city ? `Ciudad: ${emailData.city}` : ""}
    ${emailData.availability ? `Disponibilidad: ${emailData.availability}` : ""}
      `,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.patch(`/api/emails/reply/${_id}`, values);
      toast({
        title: "Respuesta enviada.",
        description: "Has respondido el mail con exito",
        status: "info",
        duration: 3500,
        isClosable: true,
      });
      form.reset();
      router.refresh();
      toggleReply();
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

  const discardReply = async () => {
    router.push(`/panel/admin/user/dashboard/mails/${_id}`);
    router.refresh();
    toggleReply();
  };
  return (
    <div className="bg-slate-100 rounded-md shadow-md px-4 py-2 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex w-full gap-2 items-center">
                <FormLabel className="font-semibold">Asunto:</FormLabel>
                <FormControl>
                  <Input
                    defaultValue={`Re:${translateSection(section)}`}
                    className="text-black border-b border-slate-800 focus-visible:shadow-gray-600/80 focus-visible:shadow-md"
                    {...field}
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
              <FormItem className="flex w-full gap-2 items-center">
                <FormLabel className="font-semibold">Para:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={email}
                    className="text-black border-b border-slate-800 focus-visible:shadow-gray-600/80 focus-visible:shadow-md"
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="textEmailArea"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormControl>
                  <Textarea
                    placeholder="Redacte un mail"
                    className="border-slate-800 focus-visible:shadow-gray-600/80 text-black focus-visible:shadow-md min-h-64"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-center justify-between">
            <Button
              className="min-w-[150px] w-fit disabled:bg-slate-600/70 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? <Spinner /> : "Enviar"}
            </Button>

            <button
              disabled={loading}
              className="hover:text-slate-900/90 transition-colors duration-100 disabled:text-gray-700/50 disabled:cursor-not-allowed"
              onClick={discardReply}
              title="Descartar"
              type="button"
            >
              <FaTrash size={20} />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
