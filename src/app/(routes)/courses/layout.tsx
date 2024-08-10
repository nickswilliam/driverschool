import { CoursesLayout } from "@/components/CoursesLayout/CoursesLayout";
import Coursescontainer from "@/pages/Courses/Courses";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Cursos",
    template: "%s | Cursos",
  },
  description: "Cursos, contenido teórico y modalidades de exámen.",
};

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Coursescontainer>
      <CoursesLayout>{children}</CoursesLayout>
    </Coursescontainer>
  );
};
export default CourseLayout;
