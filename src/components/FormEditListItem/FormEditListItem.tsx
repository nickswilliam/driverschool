"use client";
import React from "react";
import { PriceCourses } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import z from "zod";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

export const courseSchema = z.object({
  id: z
    .number({ required_error: "Es obligatorio ingresar el numero de id" })
    .min(1, { message: "Debe ingresar al menos 1 núumero de ID" }),
  courseTitle: z
    .string({
      required_error: "El nombre de curso es requerido",
    })
    .min(10, { message: "Debe ingresar al menos 10 caracteres*" }),
  href: z.string(),
});

const listSchema = z.object({
  id: z.number().min(1, { message: "Debe ingresar al menos 1 núumero de ID" }),
  courseList: z.array(courseSchema),
  paymethod: z.string(),
});

export const FormEditListItem = ({
  id,
  courseList,
  paymethod,
}: PriceCourses) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof listSchema>>({
    resolver: zodResolver(listSchema),
    defaultValues: {
      id: id,
      paymethod: paymethod,
      courseList: courseList,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "courseList",
  });

  const onSubmit = async (values: z.infer<typeof listSchema>) => {
    try {
      setLoading(true);
      await axios.patch(`/api/prices/list/${id}`, values);
      toast({
        title: "Se han actualizado los precios",
        description: `M.P: ${paymethod}`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      router.push("/panel/admin/user/dashboard/list");
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
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="w-full px-3 py-2 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 border shadow-md"
          >
            <Controller
              name={`courseList.${index}.id`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-cyan-700 text-md">
                    Identificador:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled
                      className="text-md text-black border-b border-slate-700 shadow-none bg-slate-400/20"
                    />
                  </FormControl>
                  <FormMessage className="text-orange-200" />
                </FormItem>
              )}
            />

            <Controller
              name={`courseList.${index}.courseTitle`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-cyan-700 text-md">
                    Curso:
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
            {item.href && (
              <Controller
                name={`courseList.${index}.href`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-cyan-700 text-md">
                      Link de pago:
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-md text-black border-b border-slate-700 focus-visible:shadow-slate-500/30"
                      />
                    </FormControl>
                    <FormMessage className="text-orange-200" />
                  </FormItem>
                )}
              />
            )}
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
            onClick={()=>(router.push('/panel/admin/user/dashboard/list/'))}
          >
            {loading ? <Spinner /> : <IoCloseSharp />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
