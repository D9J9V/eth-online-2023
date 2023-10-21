"use client";

import Select from "react-select";
import useSWR from "swr";

const fetchModels = () => fetch("/api/getEngine").then(res => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2 rounded-xl drop-shadow-md"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: state => {
            console.log(state);
            return "bg-[#434654] border-[#434654]";
          },
        }}
        onChange={e => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
