"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import z from "zod";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

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
import { Spinner } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { useState } from "react";
import axios from "axios";
import { ICoursesPrices } from "@/models/CoursesPrices";

const listItemsSchema = z.object({
  item: z.string().min(4, "Debe ingresar al menos 4 caracteres"),
});

const coursesPriceSchema = z.object({
  id: z
    .number({ required_error: "Es obligatorio ingresar el numero de id" })
    .min(1, { message: "Debe ingresar al menos 1 núumero de ID" }),
  btnText: z
    .string({
      required_error: "El nombre de botón es requerido",
    })
    .min(4, { message: "Debe ingresar al menos 4 caracteres*" }),
  price: z.string().min(3, "Debe ingresar al menos 3 digitos"),
  listItems: z.array(listItemsSchema),
  title: z
    .string({
      required_error: "El nombre de botón es requerido",
    })
    .min(4, { message: "Debe ingresar al menos 4 caracteres*" }),
});

export const FormEditCourseItem = ({
  btnText,
  id,
  listItems,
  price,
  title,
}: ICoursesPrices) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof coursesPriceSchema>>({
    resolver: zodResolver(coursesPriceSchema),
    defaultValues: {
      btnText,
      id,
      listItems,
      price: price.toString(),
      title,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "listItems",
  });

  const onSubmit = async (values: z.infer<typeof coursesPriceSchema>) => {
    try {
      setLoading(true);
      await axios.patch(`/api/prices/${id}`, values);
      toast({
        title: "Se ha actualizado info de curso",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      router.push("/panel/admin/user/dashboard/prices");
    } catch (error) {
      console.log(error);
      toast({
        title: "Ocurrió un error",
        description: "Surgió un error inesperado al enviar el formulario",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div className="w-full px-3 py-2 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 border shadow-md">
        <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-600 font-semibold">
                  Identificador:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese nombre identificador de curso*"
                    {...field}
                    className="text-md text-black border-b border-slate-700 shadow-none focus-visible:shadow-slate-500/30"
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-600 font-semibold">
                  Titulo de curso:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese titulo de curso**"
                    {...field}
                    className="text-md text-black border-b border-slate-700 shadow-none focus-visible:shadow-slate-500/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-600 font-semibold">
                  Precio:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese precio en $*"
                    {...field}
                    className="text-md text-black border-b border-slate-700 shadow-none focus-visible:shadow-slate-500/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="btnText"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-600 font-semibold">
                  Texto de acción:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese texto botón/acción*"
                    {...field}
                    className="text-md text-black border-b border-slate-700 shadow-none focus-visible:shadow-slate-500/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormLabel className="text-cyan-700 text-md">
          Características de curso:
        </FormLabel>

        {fields.map((item, index) => (
          <div
            key={item.id}
            className="w-full px-3 py-2 rounded-md flex flex-col gap-4 border shadow-md"
          >
            <Controller
              name={`listItems.${index}.item`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-cyan-700 text-md">
                    Descripción: {index + 1}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-md text-black border-b border-slate-700 shadow-none focus-visible:shadow-slate-500/30"
                    />
                  </FormControl>
                  <FormMessage className="text-orange-200" />
                </FormItem>
              )}
            />
          </div>
        ))}

        <div className="col-span-full w-full flex justify-center">
          <Button
            className="mt-4 mx-10 disabled:bg-slate-900/90 rounded-full self-center"
            disabled={loading}
            type="submit"
          >
            {loading ? <Spinner /> : <FaCheck />}
          </Button>

          <Button
            className="mt-4 mx-10 bg-slate-400 hover:bg-slate-400/90 disabled:bg-slate-400/90 rounded-full self-center"
            disabled={loading}
            type="button"
            onClick={() => router.push("/panel/admin/user/dashboard/prices/")}
          >
            {loading ? <Spinner /> : <IoCloseSharp />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
