import { ForbbidenAccess } from "@/components/ForbbidenAccess/ForbbidenAccess";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";

const ReplyPage = async () => {
  const session = await getServerSession(authOptions);
  return session?.user.role === "user" ? (
    <ForbbidenAccess />
  ) : (
    <div>ReplyPage</div>
  );
};

export default ReplyPage;
