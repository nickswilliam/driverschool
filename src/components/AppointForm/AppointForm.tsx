"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Spinner, useToast } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectFirst, SelectItem } from "../ui/custom-select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_REGEXP } from "@/lib/utils";
import { payData } from "@/data/appoint-pay-courses";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PriceCourses } from "@/types/types";

import axios from 'axios'



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
  payways: z.string({ required_error: "Seleccione una opción" }),
  coursePriceList: z.string({ required_error: "Seleccione una opción" }),
  address: z
    .string({ required_error: "Es obligatorio ingresar el domicilio" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  inBetweenStreet: z
    .string({ required_error: "Debe ingresar entre calles" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  city: z
    .string({ required_error: "Debe ingresar una localidad" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  availability: z
    .string({ required_error: "Debe ingresar una descripción" })
    .min(10, { message: "Debe ingresar al menos 10 caracteres" }),
});

interface ListCoursesType {
  id: number;
  courseTitle: string;
  href?: string;
}

const AppointForm = () => {
  const [paymethods, setPaymethods] = useState<PriceCourses[]>([]); //array of elements from db
  const [payWays, setPayWays] = useState<string>(""); //paymethods setting
  const [courses, setCourses] = useState<string>(""); //courseType setter
  const [listCourses, setListCourses] = useState<ListCoursesType[]>([]); //array of list courses (depend of paymethod select)
  const [courseFlag, setCourseFlag] = useState<boolean>(false); //flaging of setCourse
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://driver-school.vercel.app/api/prices/list",
          {
            cache: "no-store",
          }
        );
        if (!res.ok) {
          throw new Error("Failing to fetching data");
        }

        const { data } = await res.json();
        setPaymethods(data);
      } catch (error) {
        console.log("Failing to fetch data");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const toast = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      payways: "",
      coursePriceList: "",
      address: "",
      inBetweenStreet: "",
      city: "",
      availability: "",
    },
  });

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    if(payWays === '' || courses === ''){
      setErrorMsg('Debe seleccionar un metodo de pago y curso')
      return;
    }
    setErrorMsg(null)
    try {
      setLoading(true)
      await axios.post("/api/appoint", {...values, payways: payWays, coursePriceList: courses})
      toast({
        title: "Se ha enviado la información.",
        description: "Derivamos tu información a una instructora",
        status: "success",
        duration: 3500,
        isClosable: true,
      });
      form.reset()
    } catch (error) {
      console.log(error);
      toast({
        title: "Ocurrió un error",
        description: "Surgió un error inesperado al enviar el formulario",
        status: "error",
        isClosable: true,
      });
      setLoading(false)
    }finally{
      setLoading(false)
    }
    
  };

  const handlePayways = (e: any) => {
    setPayWays(e.target.value);
    const list = paymethods.find(
      (course) => course.paymethod === e.target.value
    )?.courseList;

    setListCourses(list || []);

    if (list && courseFlag) {
      setCourses(list[0]?.courseTitle);
    }
  };

  const handleCourses = (e: any) => {
    setCourses(e.target.value);
    setCourseFlag(true);
  };

  let hRefMp: string = listCourses.find((course) => course.courseTitle === courses)?.href || "";
    

  return (
    <div className="max-w-5xl w-full bg-violet-200 backdrop-blur-sm rounded-md shadow-xl py-8 px-10 mx-10 animate__animated animate__bounceInUp">
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
              <FormItem className="col-span-full">
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

          {/* Medios de Pago Select */}
          <FormField
            control={form.control}
            name="payways"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold space-y-3">
                  Medio de Pago
                </FormLabel>

                <Select handleChange={handlePayways}>
                  <FormControl>
                    <SelectFirst placeholder="Seleccione un método de pago*" />
                  </FormControl>

                  {loading ? (
                    <SelectItem value="Cargando..." disabled={true} />
                  ) : (
                    paymethods?.map((payMethod) => (
                      <SelectItem
                        key={payMethod.id}
                        value={payMethod.paymethod}
                      />
                    ))
                  )}
                </Select>
                {errorMsg && <span className="text-pink-600 mt-4">{errorMsg}</span>}
              </FormItem>
            )}
          />


          {/* Cursos X medios de pago */}
          <FormField
            control={form.control}
            name="coursePriceList"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Cursos
                </FormLabel>
                <Select handleChange={handleCourses}>
                  <SelectFirst placeholder="Seleccione un curso*" />

                  {listCourses?.map((course) => (
                    <SelectItem key={course.id} value={course.courseTitle} />
                  ))}
                </Select>
                {errorMsg && <span className="text-pink-600 mt-4">{errorMsg}</span>}
              </FormItem>
            )}
          />


          {/* Boton MP - links de pago */}
          {payWays === payData[1].title && courses && (
            <Link
              href={hRefMp}
              target="_blank"
              className="flex items-center gap-3 col-span-full place-self-center p-3 bg-pink-600 w-50 text-center rounded-md text-violet-100 hover:bg-pink-700 transition-colors"
              title={courses}
            >
              <FaHandshake
                size={25}
                className="rounded-full p-1 border border-white"
              />
              Mercado Pago
            </Link>
          )}

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Dirección
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese una dirección*"
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Localidad
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Localidad*"
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
            name="inBetweenStreet"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel className="text-pink-600 font-semibold">
                  Entre calles
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entre calles*"
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
            className="min-w-[150px] col-span-full place-self-center bg-pink-600 hover:bg-pink-700 disabled:bg-pink-600/800 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading? <Spinner/> : 'Enviar formulario'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default AppointForm;