import PageContainer from "../components/PageContainer";

const About = () => {
  return (
    <PageContainer className="text-center">
      <h1 className="text-3xl font-semibold text-neutral-50">About</h1>
      <p className="mt-4 text-neutral-300 leading-relaxed">
        Tell me something about you
      </p>
    </PageContainer>
  );
};

export default About;
