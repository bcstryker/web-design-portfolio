import Link from "./Link";
import React, {FC} from "react";

const NavBar: FC = () => (
  <div className="container mx-auto pt-10">
    <table className="w-full">
      <tr>
        <td className="w-1/4 text-center">
          <Link href="./tmp1">
            <a className="text-xl text-red-200 hover:underline">Temp 1</a>
          </Link>
        </td>
        <td className="w-1/4 text-center">
          <Link href="./tmp2">
            <a className="text-xl text-red-200 hover:underline">Temp 2</a>
          </Link>
        </td>
        <td className="w-1/4 text-center">
          <Link href="./tmp3">
            <a className="text-xl text-red-200 hover:underline">Portfolio</a>
          </Link>
        </td>
        <td className="w-1/4 text-center">
          <Link href="./tmp4">
            <a className="text-xl text-red-200 hover:underline">Resume</a>
          </Link>
        </td>
      </tr>
    </table>
  </div>
);

export default NavBar;
