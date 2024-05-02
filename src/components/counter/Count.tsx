const Count = ({ count }: { count: number }) => {
  return (
    <div className="text-4xl my-5 py-5">
      count: <span className="font-bold">{count}</span>
    </div>
  );
};

export default Count;
