import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import TableWithVisuals from "~~/components/TableWithVisuals";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <TableWithVisuals />
    </>
  );
};

export default Home;
