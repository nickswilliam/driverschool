import { IEmailData } from "@/models/Emails";
import React from "react";

export const EmailData = ({
  address,
  availability,
  city,
  course,
  courseNumber,
  coursePriceList,
  inBetweenStreet,
  payways,
}: IEmailData) => {
  return (
    <>
      {address && (
        <span>
          <strong>Dirección:</strong> {address}
        </span>
      )}
      {inBetweenStreet && (
        <span>
          <strong>Entre calles:</strong> {inBetweenStreet}
        </span>
      )}
      {city && (
        <span>
          <strong>Ciudad:</strong> {city}
        </span>
      )}
      {availability && (
        <span>
          <strong>Disponibilidad:</strong> {availability}
        </span>
      )}
      {course && (
        <span>
          <strong>Curso:</strong> {course}
        </span>
      )}
      {courseNumber && (
        <span>
          <strong>Curso: </strong>
          {courseNumber}
        </span>
      )}
      {coursePriceList && (
        <span>
          <strong>Precio:</strong> {coursePriceList}
        </span>
      )}
      {payways && (
        <span>
          <strong>Metodo de pago:</strong> {payways}
        </span>
      )}
    </>
  );
};
