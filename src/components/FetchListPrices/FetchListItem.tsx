
import { LabelAndInput } from "../ui/label-and-input";
interface IFetchListItem {
  id: number;
  courseTitle: string;
  href: string;
  idLink: number;
}

export const FetchListItem = ({ id, courseTitle, href, idLink }: IFetchListItem) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 border rounded-md py-2 px-3 shadow-md">
      <LabelAndInput title="Identificador" value={id} id={idLink} type="number"/>
      <LabelAndInput title="Curso" value={courseTitle} id={idLink} type="text"/>
      <LabelAndInput title="Link de Pago:" value={href} id={idLink} type="text"/>
    </div>
  );
};
