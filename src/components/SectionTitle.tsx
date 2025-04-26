const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="border-b-2 border-gray-300 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize text-gray-800">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
