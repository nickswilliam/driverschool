import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
  availability: string;
  coursePriceList: string;
  name: string;
  phone: string;
  payways: string;
  address: string;
  inBetweenStreet: string;
  city: string;
}

export const EmailAppoint = ({
  availability,
  coursePriceList,
  name,
  phone,
  address,
  city,
  inBetweenStreet,
  payways,
}: ContactEmailTemplateProps) => {
  const previewText = `Reservas - Motivando Conductoras ${name.split(", ")}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="mx-auto rounded-md bg-violet-100 border-solid border border-gray-400 max-w-[465px]">
            <Section className="px-4 bg-blue-800">
              <Row align="center" className="mx-auto">
                <Column align="center">
                  <Img
                    alt="logo-mc"
                    src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1716953532/driving-school/bap0xvt7yt8ypzeqgsyy.png"
                    width={40}
                  />
                </Column>
                <Column>
                  <Heading className="text-2xl text-violet-100">
                    MOTIVANDO <br />
                    <span className="text-pink-400">CONDUCTORAS</span>
                  </Heading>
                </Column>
              </Row>
            </Section>

            <Section className="mt-2 px-4 py-0">
              <Text className="text-xl text-pink-600">
                Bienvenid@ a{" "}
                <span className="uppercase">Motivando Conductoras</span>
                <br />
                <strong>{name.split(", ")}</strong>
              </Text>

              <hr />

              <Text className="mt-6 text-xl font-semibold text-center text-violet-600">
                Gracias por comunicarte con nosotros
              </Text>
              <span className="text-indigo-500 pb-8 text-lg">
                Tu reserva para el curso 🗒<strong>{coursePriceList}</strong> con el método de pago 💳<strong>{payways}</strong> ha sido confirmada, al momento de la visita la instructora te visitará al domicilio 💒<strong>{address}</strong> en las entre calles 🚏<strong>{inBetweenStreet}</strong> de la ciudad de 🌆<strong>{city}</strong>. En el caso de haber elegido abonar con tarjeta, una vez que la instructora asignada se contacte con vos, podés realizar el pago del curso en línea o por el link de mercado pago que te envíe la instructora asignada. En caso de pagar en efectivo/transferencia, la instructora te comentará los pasos a seguir para abonar el curso.
              </span>

              <hr className="mt-8" />
            </Section>

            <Section className="my-4 px-4 mb-8">
              <Text className="text-xl text-violet-600 font-bold">
                📞 Tel. de Contacto:{" "}
                <span className="text-pink-500 font-normal">{phone}</span>
              </Text>

              <Text className="text-[18px] text-violet-600 font-bold mb-4">
                ⏱️ Disponibilidad:{" "}
                <span className="text-pink-500 text-md font-normal">
                  {availability}
                </span>
              </Text>

              <Text className="text-xl text-violet-600 font-bold">
                📝 Curso elegido:{" "}
                <span className="text-pink-500 font-normal">
                  {coursePriceList}
                </span>
              </Text>

              <Text className="text-xl text-violet-600 font-bold">
                💲 Metodo de pago:{" "}
                <span className="text-pink-500 font-normal">{payways}</span>
                <pre className="italic">
                  Si el curso seleccionado es abonado en efectivo/transferencia,
                  debes aguardar a que una instructora te indique como abonar
                  por transferencia al momento de iniciar el curso o en efectivo
                  se abonará el curso al momento de comenzar la primer clase,
                  entregandose un comprobante a la alumna como constancia de
                  pago. Cualquier duda o consulta podes escribirnos o verifica
                  nuestra sección de{" "}
                  <a href="https://driver-school.vercel.app/tyc">
                    Términos y condiciones.
                  </a>
                </pre>
              </Text>

              <span className="mt-4 text-center text-sm mx-auto text-violet-500">
                Cualquier duda o consulta, nos podés escribir a nuestro mail o
                whatsapp.
              </span>
            </Section>

            <Section className="mx-auto mt-4 my-4 px-4" align="center">
              <Row align="center" className="mx-auto mb-6">
                <Column className="pr-2" align="right">
                  <Button
                    className="mx-auto bg-green-700 px-6 py-2 rounded-sm text-violet-100 font-bold"
                    href="https://api.whatsapp.com/send/?phone=541122334455"
                  >
                    Whataspp
                  </Button>
                </Column>

                <Column className="pl-2" align="left">
                  <Button
                    className="mx-auto bg-blue-800 px-10 py-2 rounded-sm font-bold text-violet-100"
                    href="mailto:info.motivandoconductoras@gmail.com"
                  >
                    Email
                  </Button>
                </Column>
              </Row>
            </Section>

            <Container className="mt-4 max-w-[465px] mx-auto py-4 bg-pink-600">
              <Section>
                <Img
                  alt="mtv-cond-logo"
                  src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1716953532/driving-school/bap0xvt7yt8ypzeqgsyy.png"
                  width={30}
                  className="mx-auto"
                />
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
