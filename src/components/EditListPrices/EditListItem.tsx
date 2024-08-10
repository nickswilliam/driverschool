import { FormEditListItem } from "../FormEditListItem/FormEditListItem";
import { LabelAndInput } from "../ui/label-and-input";
import { PriceCourses } from "@/types/types";

export const EditListItem = ({ ...data }: PriceCourses) => {
  const {courseList, id, paymethod} = data
  
  return (
    <div className="mb-4">
      <FormEditListItem
        id={id}
        courseList={courseList}
        paymethod={paymethod}
      />
    </div>
  );
};
