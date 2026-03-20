import PMExercisesClient from "./PMExercisesClient";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "PM Exercises – Sudhaman",
  description: "Real PM frameworks applied to real problems — RICE, 5 Whys, Metrics Trees, PRDs, and more.",
};

export default function PMExercisesPage() {
  return (
    <>
      <Navbar />
      <PMExercisesClient />
      <Footer />
    </>
  );
}
