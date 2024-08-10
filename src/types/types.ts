import { Dispatch, SetStateAction } from "react";

export type TitleHeaderPageType = {
  title: string;
  bgColor: string;
  subtitle?: string;
  titleColor?: string;
};

export interface CourseConsultTypes {
  id: number;
  title: string;
  price: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

export interface DLCsDocumentsListType {
  id: number;
  title: string;
  description: string;
  url: string;
  fileName: string;
}


export interface ListItems  {
    item: string;
    id: number;
  }
  
  export interface CoursesPrices {
    id: number;
    title: string;
    price: number;
    btnText: string;
    listItems: ListItems[]
  }

  export interface CourseList{
    id: number,
    courseTitle: string,
    href?: string,
  }
  export interface PriceCourses {
    id: number,
    paymethod: string,
    courseList: CourseList[],
  }