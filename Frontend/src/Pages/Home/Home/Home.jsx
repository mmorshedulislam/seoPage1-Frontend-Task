import UseCardContainer from "../../../components/Reusable/UseCardContainer/UseCardContainer";

const Home = () => {
  return (
    <main>
      <div className="flex gap-2 w-full h-screen overflow-x-auto p-3">
        <UseCardContainer title="Incomplete" bgColor="#D11010" />
        <UseCardContainer title="To Do" bgColor="#00B4FF" />
        <UseCardContainer title="Doing" bgColor="#FFE700" />
        <UseCardContainer title="Under Review" />
        <UseCardContainer title="Completed" />
        <UseCardContainer title="Overdue" />
      </div>
    </main>
  );
};

export default Home;
