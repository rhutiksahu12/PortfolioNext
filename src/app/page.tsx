import ContactMeForm from "@/components/ContactMeForm";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Skills from "@/components/Skills";


export default function Home() {


  return (
    <MaxWidthWrapper>

      <Intro />
      <Experience />
      <Skills />
      <ContactMeForm />

    </MaxWidthWrapper>

  );
}
