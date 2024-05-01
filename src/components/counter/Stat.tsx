type StatProps = {
  totalCount: number;
};

const Stat = ({ totalCount }: StatProps) => {
  return (
    <div className="text-center my-8 bg-slate-300 w-[50%]  mx-auto p-10">
      <p className="text-3xl">
        total count: <span className="font-bold">{totalCount}</span>
      </p>
    </div>
  );
};

export default Stat;
